const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shutter');
  console.log('database connected');
}

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
