const mongoose = require('mongoose');
const Shutter = require('../models/shutter')
const { places, descriptors } = require('./seedHelpers')
const cities = require('./cities');
const axios = require('axios');
const api = require('./api')

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shutter');
  console.log('database connected');
}

main().catch(err => console.log(err));

const sample = array => array[Math.floor(Math.random() * array.length)]

async function seedImg() {
  try {
    const resp = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: api,
        collections: 1114848,
      },
    })
    return resp.data.urls.small
  } catch (err) {
    console.error(err)
  }
}

const seedDb = async () => {
  await Shutter.deleteMany({})
  for (let i = 0; i < 3; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const shutter = new Shutter({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: await seedImg(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates doloribus, eligendi numquam placeat ea! Quam adipisci, tempora mollitia molestiae dicta molestias nisi ea officiis illum fugit autem facilis numquam.'
    })
    await shutter.save();
  }
}

seedDb().then(() => {
  mongoose.connection.close();
});