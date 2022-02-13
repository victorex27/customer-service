import Customer from '../components/Customer';

export default (app) => {
  app.use(
    '/api/v1/',
    Customer
  );
};
