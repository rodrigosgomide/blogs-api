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

const postScheema = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  id: Joi.number().required(),
});

module.exports = {
  userScheema,
  categoryScheema,
  postScheema,
};