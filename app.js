const express = require('express');
const app = express();
const path = require('path');
const Shuttr = require('./models/shutter')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/shuttr', (req, res) => {
  const shuttr = new Shuttr({title: 'new title'})
  shuttr.save();
  res.send(shuttr);
})

module.exports = app