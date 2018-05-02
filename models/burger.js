'use strict';
module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define('Burger', {
    burger_name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    devoured: { 
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models){
        //burger is associated with one customer
        Burger.belongsTo(models.Customer, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        })
      }
    }
  });
  return Burger;
};