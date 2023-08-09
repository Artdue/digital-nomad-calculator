/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "States",
      [
        {
          state_name: "France",
          min_income: 2000,
          banned_citizenship: "RU",
          work_exp: 6,
          min_age: 18,
          max_age: 75,
          gender: "none",
          criminal: true,
          actions: "bla-bla-bla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: "UK",
          min_income: 3000,
          banned_citizenship: "RU",
          work_exp: 8,
          min_age: 18,
          max_age: 70,
          gender: "none",
          criminal: true,
          actions: "bla-bla-bla2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: "North Korea",
          min_income: 200,
          banned_citizenship: "USA",
          work_exp: 1,
          min_age: 7,
          max_age: 115,
          gender: "none",
          criminal: false,
          actions: "bla-bla-bla3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state_name: "Norway",
          min_income: 20000,
          banned_citizenship: "RU",
          work_exp: 18,
          min_age: 30,
          max_age: 35,
          gender: "female",
          criminal: true,
          actions: "bla-bla-bla4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("States", null, {});
  },
};
