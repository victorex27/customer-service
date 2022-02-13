import express from 'express';
import CustomerAPI from './CustomerAPI';


const router = express.Router();

router.use('/customer', CustomerAPI );

export default router;
