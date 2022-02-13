import Joi from '@hapi/joi';



export const postTransaction = Joi.object({
  customerName: Joi.string().trim().required(),
  amount: Joi.number().required(),
  narration: Joi.string().trim().optional().allow(''),
});



