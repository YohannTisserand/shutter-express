const express = require('express');
const app = express();
const path = require('path');
const Shutter = require('./models/shutter');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const { STATUS_CODES } = require('http');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/shutter', catchAsync(async (req, res) => {
  const shutters = await Shutter.find({});
  res.render('shutter/index', { shutters })
}));

app.get('/shutter/new', (req, res) => {
  res.render('shutter/new');
});

app.post('/shutter', catchAsync(async (req, res, next) => {
  if (!req.body.shutter) throw new ExpressError('Invalid data', 400);
    const shutter = new Shutter(req.body.shutter);
    await shutter.save();
    res.redirect(`/shutter/${shutter._id}`)
}));

app.get('/shutter/:id', catchAsync(async(req, res) => {
  const shutter = await Shutter.findById(req.params.id)
  res.render('shutter/show', { shutter })
}));

app.get('/shutter/:id/edit', catchAsync(async (req, res) => {
  const shutter = await Shutter.findById(req.params.id)
  res.render('shutter/edit', { shutter })
}));

app.put('/shutter/:id', catchAsync(async (req, res) => {
  const { id } = req.params;
  const shutter = await Shutter.findByIdAndUpdate(id, { ...req.body.shutter }); //spread operator
  res.redirect(`/shutter/${shutter._id}`)
}));

app.delete('/shutter/:id', catchAsync(async (req, res) => {
  const { id } = req.params;
  await Shutter.findByIdAndDelete(id);
  res.redirect('/shutter');
}));

app.all('*', (req, res, next) => {
  next(new ExpressError('Page not found', 404))
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Something went wrong' } = err
  res.status(statusCode).send(message);
});

module.exports = app