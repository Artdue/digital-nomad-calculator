'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'demo',
        first_name: 'John',
        middle_name: 'Doe',
        last_name: 'Smith',
        email: 'demo@example.com',
        password: 'hashedPassword', 
        subscribed: true,
        passport: '/uploads/passport/demo-passport.jpg',
        balance: '/uploads/balance/demo-balance.pdf',
        lease: '/uploads/lease/demo-lease.docx',
        citizenship: 'USA',
        income: 50000,
        work_exp: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
