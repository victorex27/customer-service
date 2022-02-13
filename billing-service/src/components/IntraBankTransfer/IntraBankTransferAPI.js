import { Router } from 'express';
import { validate } from '../../utilities/schemaValidator';
import IntraBankTransferSchema from './IntraBankTransferSchema';

import IntraBankTransferController from './IntraBankTransferController';


const IntraBankTransferAPI = Router();

IntraBankTransferAPI.post(
  '/',
 validate(IntraBankTransferSchema.postTransaction),
  IntraBankTransferController.postTransaction
);


export default IntraBankTransferAPI;
