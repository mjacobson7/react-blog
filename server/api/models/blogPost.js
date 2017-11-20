var Sequelize = require('sequelize');
var sequelize = require('../config/database').database;
var User = require('./user').User;

    var BlogPost = sequelize.define('blogPost', {
        title: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        body: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        background_image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        body_image: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    BlogPost.belongsTo(User);
    
    sequelize.sync()
        .then(() => console.log('blogPosts table has been successfully created, if one doesn\'t exist'))
        .catch(error => console.log('This error occured', error));
    
    module.exports = BlogPost;
