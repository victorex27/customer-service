import InterBankRouter from '../components/InterBankTransfer/';
import IntraBankRouter from '../components/IntraBankTransfer/';

export default (app) => {
  app.use(
    '/api/v1/money',
    InterBankRouter,
    IntraBankRouter
  );
};
