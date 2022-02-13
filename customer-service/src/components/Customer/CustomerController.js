import CustomerService from './CustomerService';

class CustomerController {
  static async postTransaction(req, res) {
    try {
      const { customerName, narration, amount } = req.body;

      const transaction = await CustomerService.postTransaction({
        customerName,
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
      console.log(error.message);
      return res.status(500).send({
        status: 500,
        message: 'Operation Failed',
      });
    }
  }
}

export default CustomerController;
