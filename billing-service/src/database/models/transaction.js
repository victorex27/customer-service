'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      Transaction.belongsTo(User, {
        foreignKey:'userId'
      })
    }
  }
  Transaction.init({
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    status: DataTypes.STRING,
    narration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};