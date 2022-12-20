// Define the Sequelize Model:  ~~ define attribute of table

module.exports = (sequelize, Sequelize) => {
  // / sequelize.define(modelName, attributes, options)
  // option:  đặt tên trực tiếp cho table với thuộc tính tableName: <name>
  const Auth = sequelize.define("auth", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return Auth;
};
