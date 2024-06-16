import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'PhoneNumber should be a string',
    'string.min': 'PhoneNumber should have at least 3 characters',
    'string.max': 'PhoneNumber should have at most 20 characters',
    'any.required': 'PhoneNumber is required',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should have at least 3 characters',
    'string.max': 'Email should have at most 20 characters',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'ContactType should be a string',
    'string.min': 'ContactType should have at least 3 characters',
    'string.max': 'ContactType should have at most 20 characters',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'PhoneNumber should be a string',
    'string.min': 'PhoneNumber should have at least 3 characters',
    'string.max': 'PhoneNumber should have at most 20 characters',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should have at least 3 characters',
    'string.max': 'Email should have at most 20 characters',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'ContactType should be a string',
    'string.min': 'ContactType should have at least 3 characters',
    'string.max': 'ContactType should have at most 20 characters',
  }),
});
