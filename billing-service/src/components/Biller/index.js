import express from 'express';
import BillerAPI from './BillerAPI';


const router = express.Router();

router.use('/biller', BillerAPI );

export default router;
