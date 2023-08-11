const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  State.init(
    {
      state_name: DataTypes.STRING,
      min_income: DataTypes.INTEGER,
      banned_citizenship: DataTypes.STRING,
      work_exp: DataTypes.INTEGER,
      min_age: DataTypes.INTEGER,
      max_age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      criminal: DataTypes.BOOLEAN,
      visaType: DataTypes.STRING,
      visaTerm: DataTypes.INTEGER,
      visaShare: DataTypes.STRING,
      actions: DataTypes.STRING(5000),
    },
    {
      sequelize,
      modelName: 'State',
    }
  );
  return State;
};
