import Joi from 'joi';

const memberSchema = Joi.object({
  fullName: Joi.string().min(3).required(),
  birthDay: Joi.string().required(),
  rg: Joi.string().allow(null),
  cpf: Joi.string().required().min(11).max(14),
  fatherName: Joi.string().allow(null),
  motherName: Joi.string().allow(null),
  isBaptized: Joi.boolean().allow(null),
  baptizedDate: Joi.date().iso().allow(null),
  memberNumber: Joi.string().allow(null),
  phoneNumber: Joi.string().allow(null),
  email: Joi.string().email().allow(null),
  streetAddress: Joi.string().allow(null),
  numberAddress: Joi.string().allow(null),
  neighborhoodAddress: Joi.string().allow(null),
  cityAddress: Joi.string().allow(null),
  stateAddress: Joi.string().allow(null),
  position: Joi.object().allow(null),

});

export default memberSchema;
