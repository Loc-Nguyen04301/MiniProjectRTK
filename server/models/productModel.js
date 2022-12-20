// Define the Sequelize Model:  ~~ define attribute of table

module.exports = (sequelize, Sequelize) => {
  // / sequelize.define(modelName, attributes, options)
  // option:  đặt tên trực tiếp cho table với thuộc tính tableName: <name>
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    old_price: {
      type: Sequelize.STRING,
    },
    new_price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img: {
      type: Sequelize.TEXT("long"),
      allowNull: false,
    },
  });
  return Product;
};
