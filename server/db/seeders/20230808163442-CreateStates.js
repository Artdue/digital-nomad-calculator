/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'States',
      [
        {
          state_name: 'Франция',
          min_income: 2000,
          banned_citizenship: 'GER',
          work_exp: 3,
          min_age: 18,
          max_age: 75,
          gender: 'none',
          criminal: false,
          actions:
            '1. Оформить справку об отсутствии судимостей\n2. Получить выписку о состоянии банковского счета\n3. Справка о подтверждении занятости и доходов\n4. Действующая международная страховка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: 'Великобритания',
          min_income: 3000,
          banned_citizenship: 'RU',
          work_exp: 18,
          min_age: 18,
          max_age: 70,
          gender: 'none',
          criminal: true,
          actions:
            '1. Оформить справку об отсутствии судимостей\n2. Получить выписку о состоянии банковского счета\n3. Справка о подтверждении занятости и доходов\n4. Действующая международная страховка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: 'Канада',
          min_income: 1000,
          banned_citizenship: 'UK',
          work_exp: 1,
          min_age: 7,
          max_age: 115,
          gender: 'none',
          criminal: false,
          actions:
            '1. Оформить справку об отсутствии судимостей\n2. Получить выписку о состоянии банковского счета\n3. Справка о подтверждении занятости и доходов\n4. Действующая международная страховка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: 'Италия',
          min_income: 500,
          banned_citizenship: 'FR',
          work_exp: 3,
          min_age: 30,
          max_age: 35,
          gender: 'female',
          criminal: true,
          actions:
            '1. Оформить справку об отсутствии судимостей\n2. Получить выписку о состоянии банковского счета\n3. Справка о подтверждении занятости и доходов\n4. Действующая международная страховка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: 'Германия',
          min_income: 2000,
          banned_citizenship: 'FR',
          work_exp: 6,
          min_age: 18,
          max_age: 75,
          gender: 'none',
          criminal: true,
          actions:
            '1. Оформить справку об отсутствии судимостей\n2. Получить выписку о состоянии банковского счета\n3. Справка о подтверждении занятости и доходов\n4. Действующая международная страховка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: 'Япония',
          min_income: 1000,
          banned_citizenship: 'CH',
          work_exp: 6,
          min_age: 18,
          max_age: 75,
          gender: 'none',
          criminal: false,
          actions:
            '1. Оформить справку об отсутствии судимостей\n2. Получить выписку о состоянии банковского счета\n3. Справка о подтверждении занятости и доходов\n4. Действующая международная страховка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: 'ОАЭ',
          min_income: 3000,
          banned_citizenship: '',
          work_exp: 9,
          min_age: 18,
          max_age: 75,
          gender: 'none',
          criminal: true,
          actions:
            '1. Оформить справку об отсутствии судимостей\n2. Получить выписку о состоянии банковского счета\n3. Справка о подтверждении занятости и доходов\n4. Действующая международная страховка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('States', null, {});
  },
};
