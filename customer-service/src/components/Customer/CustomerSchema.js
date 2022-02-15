import Joi from '@hapi/joi';

export const postTransaction = Joi.object({
  customerId: Joi.number().required(),
  amount: Joi.number().min(5).required(),
  narration: Joi.string().trim().optional().allow(''),
});
