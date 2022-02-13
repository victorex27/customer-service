class IntraBankTransferService {
  static async postingTransaction(
    {
      // debit_accountnumber,
      // debit_accountbranchcode,
      // credit_accountnumber,
      // credit_accountbranchcode,
      // tran_narration,
      // tran_amount,
    }
  ) {
    // env file
    const ccy = 'ZAR';
    const msg_id = 'NXG10052021001',
      debit_accountnumber = '30000038692',
      debit_accountccy = 'ZAR',
      debit_accountbranchcode = '004',
      credit_accountnumber = '30000039028',
      credit_accountccy = 'ZAR',
      credit_accountbranchcode = '004',
      tran_narration = 'Test',
      channel_code = 'NEXTGEN',
      request_time = '2021-05-10 10:00',
      tran_amount = '1',
      user_loginid = '';

    // make axios call

    return {
      transactionId: 'jhkhkhkhjhkjhyuiyiuyiy',
    };
  }
}

export default IntraBankTransferService;
