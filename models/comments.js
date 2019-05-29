/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    comments_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    post_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'comments'
  });
};
