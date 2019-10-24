const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const connection = new Sequelize('centraal_academy', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel.User(connection, Sequelize);
    connection.sync({force:true}).then (()=>{ 
        console.log('Database and tables created/connected');
    });

    module.exports = {
        User
    };