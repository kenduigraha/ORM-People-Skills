'use strict'

const models = require ('./models')
const Users = models.Users
const Skills = models.Skills

/*
  * test create 1 user without any skill
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
  * remember : skills name must be unique
*/
Users.create({
  username  : "robot",
  password  : "password",
  email     : "power@ranger.com",
  createdAt : new Date(),
  updatedAt : new Date()
}).then((user, err) => {
  Skills.create({
    name: "makankuaci",
    value: "100",
    UserId: user.dataValues.id,
    createdAt : new Date(),
    updatedAt : new Date()
  })

  Skills.create({
    name: "pistolair",
    value: "20",
    UserId: user.dataValues.id,
    createdAt : new Date(),
    updatedAt : new Date()
  })
})
/*
  * find specidic user with his skills
*/
// Users.findOne({
//   where: {
//     username: 'kabutaku'
//   },
//   include : {
//     model: Skills
//   }
// }).then((user, err) => {
//   // console.log(user.dataValues);
//   user.getSkills().then((skill, err) => {
//     // console.log(skill[0].dataValues);
//     console.log(`Username : ${user.username}`);
//     for (var i = 0; i < skill.length; i++) {
//       console.log(`skill - ${i+1} : ${skill[i].name} - value : ${skill[i].value}`);
//     }
//   })
// })
