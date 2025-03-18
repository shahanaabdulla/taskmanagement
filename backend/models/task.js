'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // Define the association between Task and User models
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      userId: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'id',      
        },
      },
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );

  return Task;
};
