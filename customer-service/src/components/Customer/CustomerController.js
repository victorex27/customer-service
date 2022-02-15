import CustomerService from './CustomerService';

class CustomerController {
  static async postTransaction(req, res) {
    try {
      const { customerId: id, narration, amount } = req.body;

      const transaction = await CustomerService.postTransaction({
        id,
        narration,
        amount,
      });

      return res.status(201).send({
        status: 201,
        message: 'Operation Was Successful',

        data: {
          ...transaction,
        },
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        message: error.message || 'Operation Failed',
      });
    }
  }
}

export default CustomerController;
