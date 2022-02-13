import Joi from '@hapi/joi';



export const postTransaction = Joi.object({
  id: Joi.number().required(),
  amount: Joi.number().required(),
  narration: Joi.string().trim().optional().allow(''),
});



