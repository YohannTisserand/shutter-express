const mongoose = require('mongoose');
const Shuttr = require('../models/shutter')
const cities = require('./cities');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shutter');
  console.log('database connected');
}

main().catch(err => console.log(err));

const seedDb = async () => {
  await Shuttr.deleteMany({})
  for (let i = 0; i < 1000; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const shutter = new Shuttr({
      location: `${cities[random1000].city}`
    })
    await shutter.save();
  }
}
seedDb();