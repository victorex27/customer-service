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

      return res.status(201).send({
        status: 201,
        message: 'Operation Was Successful',

        data: {
          ...transaction.dataValues,
        },
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({
        status: 400,
        message: error.message || 'Operation Failed',
      });
    }
  }
}

export default BillerController;
