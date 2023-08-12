const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hash = await bcrypt.hash('1', 10);
    const hashedPassword = await bcrypt.hash('123', 10);
    await queryInterface.bulkInsert('Users', [
      {
        login: 'demo',
        first_name: 'John',
        middle_name: 'Doe',
        last_name: 'Smith',
        email: 'demo@example.com',
        password: hashedPassword,
        subscribed: true,
        passport: '/uploads/passport/demo-passport.jpg',
        balance: '/uploads/balance/demo-balance.pdf',
        lease: '/uploads/lease/demo-lease.docx',
        citizenship: 'USA',
        income: 50000,
        work_exp: 5,
        document_status: 'Принят в работу',
        work_date: '2023-03-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'admin',
        first_name: 'John',
        middle_name: 'Doe',
        last_name: 'Smith',
        email: 'admin@admin',
        password: hash,
        subscribed: true,
        phoneNumber: '',
        passport: '',
        balance: '',
        lease: '',
        citizenship: '',
        income: 50000,
        work_exp: 5,
        document_status: '',
        work_date: '2023-03-01',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
