/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      state_name: {
        type: Sequelize.STRING,
      },
      min_income: {
        type: Sequelize.INTEGER,
      },
      banned_citizenship: {
        type: Sequelize.STRING,
      },
      work_exp: {
        type: Sequelize.INTEGER,
      },
      min_age: {
        type: Sequelize.INTEGER,
      },
      max_age: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING,
      },
      criminal: {
        type: Sequelize.BOOLEAN,
      },
      actions: {
        type: Sequelize.STRING(5000),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('States');
  },
};
