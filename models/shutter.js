const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShutterSchema = new Schema({
  title: String,
  image: String,
  location: String,
  description: String
})

module.exports = mongoose.model('Shutter', ShutterSchema);