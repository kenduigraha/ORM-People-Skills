'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skills = sequelize.define('Skills', {
    value: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Skills.belongsTo(models.Users)
      }
    }
  });
  return Skills;
};
