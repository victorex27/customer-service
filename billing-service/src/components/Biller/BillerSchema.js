import Joi from '@hapi/joi';

export const postTransaction = Joi.object({
  id: Joi.number().required(),
  amount: Joi.number().min(5).required(),
  narration: Joi.string().trim().optional().allow(''),
});

export const updateTransaction = Joi.object({
  id: Joi.number().required(),
  customerId: Joi.number().required(),
  amount: Joi.number().required(),
  status: Joi.string().valid('SUCCESS', 'PENDING', 'FAILED').required(),
});
