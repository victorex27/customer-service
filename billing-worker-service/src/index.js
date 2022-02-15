const dotenv = require('dotenv');
const amqplib = require('amqplib');

const amqpUrl =
  `amqp://${process.env.AMQP_HOST}:5672` || 'amqp://localhost:5673';
const axios = require('axios');

dotenv.config();

let connected = false;
const queue = process.env.QUEUE_NAME;
const queueTag = process.env.QUEUE_TAG;

const pauseExecution = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, process.env.DELAY_IN_MS)
  );
};

const updateBillerRecord = ({ id, amount, customerId }) => {
  return axios.patch(
    `http://${process.env.BILLER_SERVICE_HOST}:6000/api/v1/biller/update`,
    {
      id,
      amount,
      status: 'SUCCESS',
      customerId,
    }
  );
};

async function processCharge(msg) {
  const obj = JSON.parse(msg.content.toString());
  const { id, amount, customerId } = obj;

  await pauseExecution();

  await updateBillerRecord({ id, amount, customerId });
}

const connectToRabbitMqServer = async () => {
  if (!connected) {
    const connection = await amqplib.connect(amqpUrl, 'heartbeat=60');
    const channel = await connection.createChannel();
    channel.prefetch(10);

    await channel.assertQueue(queue, { durable: true });
    await channel.consume(
      queue,
      async (msg) => {
        await processCharge(msg);
        channel.ack(msg);
      },
      {
        noAck: false,
        consumerTag: queueTag,
      }
    );
    connected = true;
    console.log('billing worker connected');
  }
};

setInterval(() => {
  connectToRabbitMqServer();
}, 5000);
