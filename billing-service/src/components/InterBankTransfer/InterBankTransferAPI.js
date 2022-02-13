import { Router } from 'express';
import { validate } from '../../utilities/schemaValidator';
import InterBankTransferSchema from './InterBankTransferSchema';

import InterBankTransferController from './InterBankTransferController';


const InterBankTransferAPI = Router();

InterBankTransferAPI.post(
  '/',
 validate(InterBankTransferSchema.postTransaction),
  InterBankTransferController.postTransaction
);

InterBankTransferAPI.get(
  '/',
  (req, res) =>{

    return res.status(200).json({done: true})
  }
);


export default InterBankTransferAPI;
