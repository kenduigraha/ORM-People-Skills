# ORM-People-Skills

## Dependecies
1. sequelize : ```npm install --save-dev sequelize```
2. sequelize : ```npm install --save-dev sequelize-cli```
3. postgres  : ```npm install --save pg```
4. sequelize-isunique-validator : ```npm install--save sequelize-isunique-validator```

## Database Configuration
1. Database's name : db_user_skills
2. Table :
    * users :
      * username (STRING)
      * password (STRING)
      * email (STRING)
    * skills
      * name (STRING)
      * value (STRING)

## Note
1. install dependencies
2. express configuration : ```express .```
3. sequelize init
4. edit config/config.json
5. make Users table : ```sequelize model:create --name Users --attributes "username:string,password:string,email:string"```
6. migrate : ```sequelize db:migrate```
7. make Skills table : ```sequelize model:create --name Skills --attributes "value:string"```
8. migrate : ```sequelize db:migrate```
9. seeding admin data into Users table : ```sequelize seed:create --name seed_users_admin```
10. seed the admin seeder file ```sequelize db:seed --seed seeders/20161106234045-seed_users_admin.js```
11. add new attribute to Skills table ```sequelize migration:create --name add_name_attribute_to_skills_table```
10. migrate : ```sequelize db:migrate```
11. add FK : ```sequelize migration:create --name add_FK_to_skills_table```
12. migrate : ```sequelize db:migrate```

## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
