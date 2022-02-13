require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    operatorsAliases: false,
    logging: true,
  },
  test: {
    username: process.env.DATABASE_TEST_USER,
    password: process.env.DATABASE_TEST_PASSWORD,
    database: process.env.DATABASE_TEST_NAME,
    host: process.env.DATABASE_TEST_HOST,
    dialect: process.env.DATABASE_TEST_DIALECT,
    operatorsAliases: false,
  },
  production: {
    username: process.env.DATABASE_PROD_USER,
    password: process.env.DATABASE_PROD_PASSWORD,
    database: process.env.DATABASE_PROD_NAME,
    host: process.env.DATABASE_PROD_HOST,
    dialect: process.env.DATABASE_PROD_DIALECT,
    operatorsAliases: false,
  },
};
