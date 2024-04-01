import Joi from 'joi';

const roomSchema = Joi.object({
  name: Joi.string().required(),
  roomtype: Joi.string().required(),
  price: Joi.number().required(),
  // Add more fields as necessary
});

export default roomSchema;