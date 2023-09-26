'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
  }
  Task.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    status: {
      type: DataTypes.STRING,
      field: 'status'
    },
  }, {
    sequelize,
    modelName: 'Task',
    timestamps: true,
    underscored: true
  });
  return Task;
};