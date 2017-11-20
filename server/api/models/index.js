    const models = {
        User: sequelize.import('./user'),
        BlogPost: sequelize.import('./blogPost'),
        GlobalSetting: sequelize.import('./globalSetting');
      };
      
      Object.keys(models).forEach((modelName) => {
        if ('associate' in models[modelName]) {
          models[modelName].associate(models);
        }
      });
      
      models.sequelize = sequelize;
      models.Sequelize = Sequelize;
    
      module.exports.models = models;
