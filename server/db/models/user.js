const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      login: DataTypes.STRING,
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      subscribed: DataTypes.BOOLEAN,
      birthDate: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      passport: DataTypes.STRING,
      balance: DataTypes.STRING,
      lease: DataTypes.STRING,
      citizenship: DataTypes.STRING,
      income: DataTypes.INTEGER,
      work_exp: DataTypes.INTEGER,
      work_date: DataTypes.STRING,
      document_status: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      visaType: DataTypes.STRING,
      visaTerm: DataTypes.INTEGER,
      visaShare: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
