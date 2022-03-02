const Joi = require('joi');

module.exports.shutterSchema = Joi.object({
  shutter: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    location: Joi.string().required()
  }).required()
})