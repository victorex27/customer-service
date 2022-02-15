import { Router } from 'express';
import { validate } from '../../utilities/schemaValidator';
import { postTransaction , updateTransaction} from './BillerSchema';

import BillerController from './BillerController';

const BillerAPI = Router();

BillerAPI.post(
  '/',
  validate(postTransaction),
  BillerController.postTransaction
);


BillerAPI.patch(
  '/update',
  validate(updateTransaction),
  BillerController.updateTransaction
);

export default BillerAPI;
