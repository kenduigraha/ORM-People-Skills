'use strict';
const Sequelize = require('sequelize')
require('sequelize-isunique-validator')(Sequelize)

module.exports = function(sequelize, DataTypes) {
  var Skills = sequelize.define('Skills', {
    value: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      validate: {
        isUnique: sequelize.validateIsUnique('name')
      }
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
