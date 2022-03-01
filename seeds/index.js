const mongoose = require('mongoose');
const Shutter = require('../models/shutter')
const { places, descriptors } = require('./seedHelpers')
const cities = require('./cities');
const axios = require('axios')

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
      title: `${sample(descriptors)} ${sample(places)}`,
      image: 'https://placeimg.com/640/480/nature',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates doloribus, eligendi numquam placeat ea! Quam adipisci, tempora mollitia molestiae dicta molestias nisi ea officiis illum fugit autem facilis numquam.'
    })
    await shutter.save();
  }
}

seedDb().then(() => {
  mongoose.connection.close();
});