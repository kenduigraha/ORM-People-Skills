'use strict'

const models = require ('./models')
const Users = models.Users
const Skills = models.Skills

/*
  * test create 1 user
*/
// Users.create({
//   username  : "kenduigraha",
//   password  : "password",
//   email     : "ken@ken.com",
//   createdAt : new Date(),
//   updatedAt : new Date()
// })

/*
  * test create user has many skills
*/
// Users.create({
//   username  : "hamtaro",
//   password  : "password",
//   email     : "power@ranger.com",
//   createdAt : new Date(),
//   updatedAt : new Date()
// }).then((user, err) => {
//   Skills.create({
//     name: "makankuaci",
//     value: "100",
//     createdAt : new Date(),
//     updatedAt : new Date()
//   })
//
//   Skills.create({
//     name: "pistolair",
//     value: "20",
//     createdAt : new Date(),
//     updatedAt : new Date()
//   })
// })

Users.findOne({
  where: {
    username: 'hamtaro'
  },
  include : {
    model: Skills
  }
}).then((user, err) => {
  console.log(user);
})
