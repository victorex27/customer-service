const dotenv = require('dotenv');

dotenv.config();

const { PORT, DATABASE_NAME, DATABASE_URL } = process.env;

module.exports = { PORT, DATABASE_NAME, DATABASE_URL };
