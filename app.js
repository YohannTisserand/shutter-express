const express = require('express');
const app = express();
const path = require('path');
const Shutter = require('./models/shutter')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))

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

module.exports = app