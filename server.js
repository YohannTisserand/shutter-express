const app = require('./app.js')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
const test = require('./models/shutter')

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shutter');
  console.log('database connected');
}

main().catch(err => console.log(err));