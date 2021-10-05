const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.TEXT,
    content: DataTypes.TEXT
  },
  {
    sequelize,
    modelName: 'posts',
    underscored: true
  }
);

module.exports = Post;
