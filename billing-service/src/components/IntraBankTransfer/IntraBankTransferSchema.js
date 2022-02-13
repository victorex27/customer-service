import Joi from '@hapi/joi';




const postTransaction = Joi.object({
  sourceAccountNumber: Joi.string().trim().required(),
  sourceAccountBranchCode: Joi.string().trim().required(),
  destinationAccountNumber: Joi.string().trim().required(),
  destinationAccountBranchCode: Joi.string().trim().required(),
  amount: Joi.number().required(),
  narration: Joi.string().trim().optional().allow(''),
});


export default {
  postTransaction
 
};
