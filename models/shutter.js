const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShuttrSchema = new Schema({
  title: String,
  location: String,
  description: String
})

module.exports = mongoose.model('Shutter', ShuttrSchema);