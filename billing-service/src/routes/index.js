import Biller from '../components/Biller';

export default (app) => {
  app.use(
    '/api/v1/',
    Biller
  );
};
