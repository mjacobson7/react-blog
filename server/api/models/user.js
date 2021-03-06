var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var sequelize = require('../config/database').database;

    var User = sequelize.define('user', {
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
          }
        } 
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    }
    
    sequelize.sync()
        .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
        .catch(error => console.log('This error occured', error));
    
    module.exports.User = User;