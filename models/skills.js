'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skills = sequelize.define('Skills', {
    value: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      validate: {
        isUnique: sequelize.validateIsUnique('name')
      }
    }
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
