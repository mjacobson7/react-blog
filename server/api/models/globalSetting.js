var Sequelize = require('sequelize');
var sequelize = require('../config/database').database;

    var globalSetting = sequelize.define('globalSetting', {
        siteTitle: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        backgrounImage: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        }
    });
    
    sequelize.sync()
        .then(() => console.log('globalSettings table has been successfully created, if one doesn\'t exist'))
        .catch(error => console.log('This error occured', error));
    
    module.exports.globalSetting = globalSetting;