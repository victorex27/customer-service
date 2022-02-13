'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Amaobi',
        lastName: 'Obikobe',
        email: 'aobikobe@gmail.com',
        address: '45 Kwado road, Abak road, Akwa ibom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
