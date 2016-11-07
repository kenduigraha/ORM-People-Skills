'use strict'

const models = require ('./models')
const Users = models.Users
const Skills = models.Skills

Users.create({
  username  : "kenduigraha",
  password  : "password",
  email     : "ken@ken.com",
  createdAt : new Date(),
  updatedAt : new Date()
})
