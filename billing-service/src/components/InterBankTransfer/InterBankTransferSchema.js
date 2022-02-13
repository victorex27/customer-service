import Joi from '@hapi/joi';



const postTransaction = Joi.object({
  sourceAccountNumber: Joi.string().trim().required(),
  destinationAccountNumber: Joi.string().trim().required(),
  destinationBankCode: Joi.string().trim().required(),
  amount: Joi.number().required(),
  narration: Joi.string().trim().optional().allow(''),
});


export default {
  postTransaction
 
};
