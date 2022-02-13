import Joi from '@hapi/joi';



const postTransaction = Joi.object({
  debitAccountNumber: Joi.string().trim().required(),
  debitAccountCCY: Joi.string().trim().optional().default(),
  debitAccountBranchCode: Joi.string().trim().required(),
  creditAccountNumber: Joi.string().trim().required(),
  creditAccountCCY: Joi.string().trim().optional().default(),
  creditAccountbranchcode: Joi.string().trim().required(),
  amount: Joi.number().required(),
  narration: Joi.string().trim().optional(),
});


export default {
  postTransaction
 
};
