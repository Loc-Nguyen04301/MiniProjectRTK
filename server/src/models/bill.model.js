"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bill.belongsTo(models.Customer, {
        targetKey: "id",
        foreignKey: "customer_name",
      });
    }
  }
  Bill.init(
    {
      customer_name: DataTypes.STRING,
      productName: DataTypes.STRING,
      img: DataTypes.TEXT("long"),
      quantity: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bill",
    }
  );
  return Bill;
};
