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
        document_status: 'Приняты в работу',
        work_date: '2023-03-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'user1',
        first_name: 'Анна',
        middle_name: 'Петровна',
        last_name: 'Иванова',
        email: 'anna@example.com',
        password: 'hashedPassword1',
        subscribed: true,
        passport: '/uploads/passport/user1-passport.jpg',
        balance: '/uploads/balance/user1-balance.pdf',
        lease: '/uploads/lease/user1-lease.docx',
        citizenship: 'Russia',
        income: 60000,
        work_exp: 3,
        document_status: 'Приняты в работу',
        work_date: '2023-04-15',
        createdAt: '2023-08-16T10:00:00Z',
        updatedAt: '2023-08-16T10:00:00Z',
      },
      {
        login: 'user2',
        first_name: 'Михаил',
        middle_name: 'Александрович',
        last_name: 'Петров',
        email: 'mikhail@example.com',
        password: 'hashedPassword2',
        subscribed: false,
        passport: '/uploads/passport/user2-passport.jpg',
        balance: '/uploads/balance/user2-balance.pdf',
        lease: '/uploads/lease/user2-lease.docx',
        citizenship: 'Russia',
        income: 75000,
        work_exp: 8,
        document_status: 'Приняты в работу',
        work_date: '2023-05-10',
        createdAt: '2023-08-16T11:00:00Z',
        updatedAt: '2023-08-16T11:00:00Z',
      },
      {
        login: 'user3',
        first_name: 'Елена',
        middle_name: 'Андреевна',
        last_name: 'Смирнова',
        email: 'elena@example.com',
        password: 'hashedPassword3',
        subscribed: true,
        passport: '/uploads/passport/user3-passport.jpg',
        balance: '/uploads/balance/user3-balance.pdf',
        lease: '/uploads/lease/user3-lease.docx',
        citizenship: 'Russia',
        income: 45000,
        work_exp: 2,
        document_status: 'Приняты в работу',
        work_date: '2023-06-20',
        createdAt: '2023-08-16T12:00:00Z',
        updatedAt: '2023-08-16T12:00:00Z',
      },
      {
        login: 'user2',
        first_name: 'Максим',
        middle_name: 'Александрович',
        last_name: 'Иванов',
        email: 'max@example.com',
        password: 'hashedPassword2',
        subscribed: false,
        passport: '/uploads/passport/user2-passport.jpg',
        balance: '',
        lease: '/uploads/lease/user2-lease.docx',
        citizenship: 'Украина',
        income: 75000,
        work_exp: 8,
        document_status: 'Приняты в работу',
        work_date: '2023-05-10',
        createdAt: '2023-08-16T11:00:00Z',
        updatedAt: '2023-08-16T11:00:00Z',
      },
      {
        login: 'user3',
        first_name: 'Елена',
        middle_name: 'Сергеевна',
        last_name: 'Козлова',
        email: 'elena@example.com',
        password: 'hashedPassword3',
        subscribed: true,
        passport: '/uploads/passport/user3-passport.jpg',
        balance: '/uploads/balance/user3-balance.pdf',
        lease: '/uploads/lease/user3-lease.docx',
        citizenship: 'Беларусь',
        income: 45000,
        work_exp: 2,
        document_status: 'Приняты в работу',
        work_date: '2023-06-20',
        createdAt: '2023-08-16T12:00:00Z',
        updatedAt: '2023-08-16T12:00:00Z',
      },
      {
        login: 'user4',
        first_name: 'Алексей',
        middle_name: 'Игоревич',
        last_name: 'Морозов',
        email: 'alex@example.com',
        password: 'hashedPassword4',
        subscribed: true,
        passport: '',
        balance: '',
        lease: '',
        citizenship: 'Россия',
        income: 55000,
        work_exp: 4,
        document_status: 'Приняты в работу',
        work_date: '2023-07-05',
        createdAt: '2023-08-16T13:00:00Z',
        updatedAt: '2023-08-16T13:00:00Z',
      },
      {
        login: 'user5',
        first_name: 'София',
        middle_name: 'Андреевна',
        last_name: 'Ковалева',
        email: 'sofia@example.com',
        password: 'hashedPassword5',
        subscribed: true,
        passport: '/uploads/passport/user5-passport.jpg',
        balance: '/uploads/balance/user5-balance.pdf',
        lease: '/uploads/lease/user5-lease.docx',
        citizenship: 'Украина',
        income: 68000,
        work_exp: 6,
        document_status: 'Приняты в работу',
        work_date: '2023-08-10',
        createdAt: '2023-08-16T14:00:00Z',
        updatedAt: '2023-08-16T14:00:00Z',
      },
      {
        login: 'user6',
        first_name: 'Дмитрий',
        middle_name: 'Николаевич',
        last_name: 'Смирнов',
        email: 'dmitry@example.com',
        password: 'hashedPassword6',
        subscribed: false,
        passport: '/uploads/passport/user6-passport.jpg',
        balance: '/uploads/balance/user6-balance.pdf',
        lease: '/uploads/lease/user6-lease.docx',
        citizenship: 'Россия',
        income: 52000,
        work_exp: 3,
        document_status: 'Приняты в работу',
        work_date: '2023-09-02',
        createdAt: '2023-08-16T15:00:00Z',
        updatedAt: '2023-08-16T15:00:00Z',
      },
      {
        login: 'user6',
        first_name: 'Дмитрий',
        middle_name: 'Николаевич',
        last_name: 'Смирнов',
        email: 'dmitry@example.com',
        password: 'hashedPassword6',
        subscribed: false,
        passport: '/uploads/passport/user6-passport.jpg',
        balance: '/uploads/balance/user6-balance.pdf',
        lease: '/uploads/lease/user6-lease.docx',
        citizenship: 'Россия',
        income: 52000,
        work_exp: 3,
        document_status: 'Приняты в работу',
        work_date: '2023-09-02',
        createdAt: '2023-08-16T15:00:00Z',
        updatedAt: '2023-08-16T15:00:00Z',
      },
      {
        login: 'user7',
        first_name: 'Мария',
        middle_name: 'Сергеевна',
        last_name: 'Иванова',
        email: 'maria@example.com',
        password: 'hashedPassword7',
        subscribed: true,
        passport: '/uploads/passport/user7-passport.jpg',
        balance: '/uploads/balance/user7-balance.pdf',
        lease: '/uploads/lease/user7-lease.docx',
        citizenship: 'Россия',
        income: 58000,
        work_exp: 4,
        document_status: 'Приняты в работу',
        work_date: '2023-10-12',
        createdAt: '2023-08-16T16:00:00Z',
        updatedAt: '2023-08-16T16:00:00Z',
      },
      {
        login: 'user8',
        first_name: 'Артем',
        middle_name: 'Владимирович',
        last_name: 'Лебедев',
        email: 'artem@example.com',
        password: 'hashedPassword8',
        subscribed: true,
        passport: '/uploads/passport/user8-passport.jpg',
        balance: '/uploads/balance/user8-balance.pdf',
        lease: '/uploads/lease/user8-lease.docx',
        citizenship: 'Украина',
        income: 72000,
        work_exp: 7,
        document_status: 'Приняты в работу',
        work_date: '2023-11-05',
        createdAt: '2023-08-16T17:00:00Z',
        updatedAt: '2023-08-16T17:00:00Z',
      },
      {
        login: 'user9',
        first_name: 'Андрей',
        middle_name: 'Викторович',
        last_name: 'Сидоров',
        email: 'andrey@example.com',
        password: 'hashedPassword9',
        subscribed: false,
        passport: '/uploads/passport/user9-passport.jpg',
        balance: '/uploads/balance/user9-balance.pdf',
        lease: '/uploads/lease/user9-lease.docx',
        citizenship: 'Россия',
        income: 49000,
        work_exp: 2,
        document_status: 'Приняты в работу',
        work_date: '2023-12-20',
        createdAt: '2023-08-16T18:00:00Z',
        updatedAt: '2023-08-16T18:00:00Z',
      },
      {
        login: 'user9',
        first_name: 'Андрей',
        middle_name: 'Викторович',
        last_name: 'Сидоров',
        email: 'andrey@example.com',
        password: 'hashedPassword9',
        subscribed: false,
        passport: '/uploads/passport/user9-passport.jpg',
        balance: '/uploads/balance/user9-balance.pdf',
        lease: '/uploads/lease/user9-lease.docx',
        citizenship: 'Россия',
        income: 49000,
        work_exp: 2,
        document_status: 'Приняты в работу',
        work_date: '2023-12-20',
        createdAt: '2023-08-16T18:00:00Z',
        updatedAt: '2023-08-16T18:00:00Z',
      },
      {
        login: 'user11',
        first_name: 'Денис',
        middle_name: 'Олегович',
        last_name: 'Миронов',
        email: 'denis@example.com',
        password: 'hashedPassword11',
        subscribed: false,
        passport: '/uploads/passport/user11-passport.jpg',
        balance: '/uploads/balance/user11-balance.pdf',
        lease: '/uploads/lease/user11-lease.docx',
        citizenship: 'Украина',
        income: 58000,
        work_exp: 3,
        document_status: 'Приняты в работу',
        work_date: '2023-09-15',
        createdAt: '2023-08-16T20:00:00Z',
        updatedAt: '2023-08-16T20:00:00Z',
      },
      {
        login: 'user11',
        first_name: 'Денис',
        middle_name: 'Олегович',
        last_name: 'Миронов',
        email: 'denis@example.com',
        password: 'hashedPassword11',
        subscribed: false,
        passport: '/uploads/passport/user11-passport.jpg',
        balance: '/uploads/balance/user11-balance.pdf',
        lease: '/uploads/lease/user11-lease.docx',
        citizenship: 'Украина',
        income: 58000,
        work_exp: 3,
        document_status: 'Приняты в работу',
        work_date: '2023-09-15',
        createdAt: '2023-08-16T20:00:00Z',
        updatedAt: '2023-08-16T20:00:00Z',
      },
      {
        login: 'user14',
        first_name: 'Виктория',
        middle_name: 'Петровна',
        last_name: 'Козырева',
        email: 'viktoria@example.com',
        password: 'hashedPassword14',
        subscribed: false,
        passport: '/uploads/passport/user14-passport.jpg',
        balance: '/uploads/balance/user14-balance.pdf',
        lease: '/uploads/lease/user14-lease.docx',
        citizenship: 'Украина',
        income: 67000,
        work_exp: 6,
        document_status: 'Приняты в работу',
        work_date: '2023-12-05',
        createdAt: '2023-08-16T23:00:00Z',
        updatedAt: '2023-08-16T23:00:00Z',
      },
      {
        login: 'user15',
        first_name: 'Сергей',
        middle_name: 'Михайлович',
        last_name: 'Федоров',
        email: 'sergey@example.com',
        password: 'hashedPassword15',
        subscribed: true,
        passport: '/uploads/passport/user15-passport.jpg',
        balance: '/uploads/balance/user15-balance.pdf',
        lease: '/uploads/lease/user15-lease.docx',
        citizenship: 'Россия',
        income: 54000,
        work_exp: 5,
        document_status: 'Приняты в работу',
        work_date: '2024-01-10',
        createdAt: '2023-08-17T00:00:00Z',
        updatedAt: '2023-08-17T00:00:00Z',
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
