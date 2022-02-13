import InterBankTransferService from './InterBankTransferService';

class InterBankTransferController {
  static async postTransaction(req, res) {
    try {
      const {
        debit_accountnumber,
        debit_accountccy,
        debit_accountbranchcode,
        credit_accountnumber,
        credit_accountccy,
        credit_accountbranchcode,
        tran_narration,
        tran_amount,
      } = req.body;

      const transaction = InterBankTransferService.postTransaction({
        debit_accountnumber,
        debit_accountccy,
        debit_accountbranchcode,
        credit_accountnumber,
        credit_accountccy,
        credit_accountbranchcode,
        tran_narration,
        tran_amount,
      });

      return res.status(201).send({
        status: 201,
        message: 'Operation Was Successful',

        data: {
          ...transaction,
        },
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: 'Operation Failed',
      });
    }
  }
}

export default InterBankTransferController;
