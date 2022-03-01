const express = require('express');
const app = express();
const path = require('path');
const Shutter = require('./models/shutter');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/shutter', async (req, res) => {
  const shutters = await Shutter.find({});
  res.render('shutter/index', { shutters })
});

app.get('/shutter/new', (req, res) => {
  res.render('shutter/new');
});

app.post('/shutter', async (req, res) => {
  const shutter = new Shutter(req.body.shutter);
  await shutter.save();
  res.redirect(`/shutter/${shutter._id}`)
});

app.get('/shutter/:id', async(req, res) => {
  const shutter = await Shutter.findById(req.params.id)
  res.render('shutter/show', { shutter })
});

app.get('/shutter/:id/edit', async (req, res) => {
  const shutter = await Shutter.findById(req.params.id)
  res.render('shutter/edit', { shutter })
});

app.put('/shutter/:id', async (req, res) => {
  const { id } = req.params;
  const shutter = await Shutter.findByIdAndUpdate(id, { ...req.body.shutter }); //spread operator
  res.redirect(`/shutter/${shutter._id}`)
});

app.delete('/shutter/:id', async (req, res) => {
  const { id } = req.params;
  await Shutter.findByIdAndDelete(id);
  res.redirect('/shutter');
});

module.exports = app