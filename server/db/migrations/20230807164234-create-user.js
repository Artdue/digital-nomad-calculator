/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      login: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      middle_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },

      subscribed: {
        type: Sequelize.BOOLEAN,
      },
      passport: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      balance: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      lease: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      citizenship: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      income: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      work_exp: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      work_date: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('Users');
  },
};
