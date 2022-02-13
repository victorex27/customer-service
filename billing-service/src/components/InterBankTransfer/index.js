import express from 'express';
import InterBankTransferAPI from './InterBankTransferAPI';


const router = express.Router();

router.use('/transfer/inter-bank', InterBankTransferAPI);

export default router;
