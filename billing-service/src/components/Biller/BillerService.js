const { User, Transaction } = require('../../database/models');
const amqplib = require('amqplib');
const {
  EXCHANGE_NAME,
  QUEUE_NAME,
  ROUTING_KEY,
  AMQP_URL,
} = require('../../config/envVariables');
class BillerService {
  static async getCustomer(id) {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      throw new Error('User does not exist');
    }

    return user;
  }

  static async postTransaction(data) {
    return Transaction.create(data);
  }

  static async updateTransaction(data, where) {
    return Transaction.update(data, { where });
  }

  static async updateWallet(data, where) {
    return User.update(data, { where });
  }

  static async publishTransaction({ id, amount, customerId }) {
    const connection = await amqplib.connect(AMQP_URL, 'heartbeat=60');
    const channel = await connection.createChannel();
    try {
      const exchange = EXCHANGE_NAME;
      const queue = QUEUE_NAME;
      const routingKey = ROUTING_KEY;

      await channel.assertExchange(exchange, 'direct', { durable: true });
      await channel.assertQueue(queue, { durable: true });
      await channel.bindQueue(queue, exchange, routingKey);

      const msg = {
        id,
        amount,
        customerId,
      };

      channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(msg)));
    } catch (err) {
      console.error('Error in publishing message', err);
    } finally {
      await channel.close();
      await connection.close();
    }
  }
}

export default BillerService;
