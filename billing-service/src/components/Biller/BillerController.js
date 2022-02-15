import BillerService from './BillerService';

class BillerController {
  static async postTransaction(req, res) {
    try {
      const { narration, amount, id } = req.body;

      await BillerService.getCustomer(id);

      const transaction = await BillerService.postTransaction({
        userId: id,
        amount,
        narration,
      });

      BillerService.publishTransaction({
        id: transaction.dataValues.id,
        amount,
        customerId: id,
      });

      return res.status(201).send({
        status: 201,
        message: 'Operation Was Successful',

        data: {
          ...transaction.dataValues,
        },
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        message: error.message || 'Operation Failed',
      });
    }
  }

  static async updateTransaction(req, res) {
    try {
      const { id, status, customerId, amount } = req.body;


      const transaction = await BillerService.updateTransaction(
        {
          status,
        },
        { id }
      );

      const user = await BillerService.getCustomer(customerId);


      await BillerService.updateWallet(
        {
          amount: amount + user.dataValues.amount,
        },
        { id: customerId }
      );

      return res.status(200).send({
        status: 200,
        message: 'Operation Was Successful',

        data: {
          ...transaction.dataValues,
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

export default BillerController;
