import IntraBankTransferService from './IntraBankTransferService';

class IntraBankTransferController {
  static async postTransaction(req, res) {
    try {

    

      const {
        sourceAccountNumber: debit_accountnumber,
        destinationAccountNumber: credit_accountnumber,
        destinationBankCode: credit_accountbranchcode,
        amount: tran_amount,
        narration: tran_narration,
      } = req.body;

      const transaction = IntraBankTransferService.postTransaction({
        debit_accountnumber,
        credit_accountnumber,
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

export default IntraBankTransferController;
