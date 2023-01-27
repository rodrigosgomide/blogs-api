const Joi = require('joi');

const userScheema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const categoryScheema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  userScheema,
  categoryScheema,
};