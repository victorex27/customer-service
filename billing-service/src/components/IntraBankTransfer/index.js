import express from 'express';
import IntraBankTransferAPI from './IntraBankTransferAPI';


const router = express.Router();

router.use('/transfer/intra-bank', IntraBankTransferAPI);

export default router;
