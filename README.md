# ORM-People-Skills

## Dependecies
1. sequelize : ```npm install --save-dev sequelize```
2. postgres  : ```npm install --save pg```
3. express generator : ```npm install -g express```

## Database Configuration
1. Database's name : db_user_skills
2. Table :
    * users :
      * username (STRING)
      * password (STRING)
      * email (STRING)
    * skills
      * data (STRING)

## Note
1. install dependencies
2. express configuration : ```express .```
3. sequelize init
4. edit config/config.json
5. make Users table : ```sequelize model:create --name Users --attributes "username:string,password:string,email:string"```
6. migrate : ```sequelize db:migrate```
7.

## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
