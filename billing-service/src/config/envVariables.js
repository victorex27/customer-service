const dotenv = require('dotenv');

dotenv.config();

const {
  PORT,
  DATABASE_NAME,
  DATABASE_URL,
  EXCHANGE_NAME,
  QUEUE_NAME,
  ROUTING_KEY,

  AMQP_HOST,
} = process.env;

const AMQP_URL = `amqp://${AMQP_HOST}:5672`;


module.exports = {
  PORT,
  DATABASE_NAME,
  DATABASE_URL,
  EXCHANGE_NAME,
  QUEUE_NAME,
  ROUTING_KEY,
  AMQP_URL,
  AMQP_HOST,
};
