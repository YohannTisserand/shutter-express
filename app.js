const express = require('express');
const app = express();
const path = require('path');
const Shutter = require('./models/shutter')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/shutter', async (req, res) => {
  const shutters = await Shutter.find({});
  res.render('shutter/index', { shutters })
})

app.get('/shutter/:id', async(req, res) => {
  const shutter = await Shutter.findById(req.params.id)
  res.render('shutter/show', { shutter })
})

module.exports = app