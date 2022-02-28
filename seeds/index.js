const mongoose = require('mongoose');
const Shutter = require('../models/shutter')
const { places, descriptors } = require('./seedHelpers')
const cities = require('./cities');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shutter');
  console.log('database connected');
}

main().catch(err => console.log(err));

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDb = async () => {
  await Shutter.deleteMany({})
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const shutter = new Shutter({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`
    })
    await shutter.save();
  }
}
seedDb().then(() => {
  mongoose.connection.close();
});