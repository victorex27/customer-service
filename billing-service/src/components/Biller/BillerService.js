import { User, Transaction } from '../../database/models';

class BillerService {
  static async getCustomer(id) {
    // make axios call

    const user = await User.findOne({ where: { id } });

    if (!user) {
      throw new Error('User does not exist');
    }

    return user;
    // return User.findOne( );
  }

  static async postTransaction(data) {
    // make axios call

    return Transaction.create(data);
  }

  static async updateTransaction({ data, where }) {
    return Transaction.update(data, where);
  }
}

export default BillerService;
