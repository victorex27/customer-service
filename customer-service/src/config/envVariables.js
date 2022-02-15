import dotenv from 'dotenv';

dotenv.config();

const { PORT, BILLER_SERVICE_HOST } = process.env;
const BILLER_SERVICE = `http://${BILLER_SERVICE_HOST}:7001/api/v1`;

export { PORT, BILLER_SERVICE };
