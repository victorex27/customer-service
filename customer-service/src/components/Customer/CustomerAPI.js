import { Router } from 'express';
import { validate } from '../../utilities/schemaValidator';
import { postTransaction } from './CustomerSchema';

import CustomerController from './CustomerController';

const CustomerAPI = Router();

CustomerAPI.post(
  '/',
  validate(postTransaction),
  CustomerController.postTransaction
);

export default CustomerAPI;
