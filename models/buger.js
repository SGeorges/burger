module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        default: false,
      }
    });

    return Burger;
};