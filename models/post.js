/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post', {
    post_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatarUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    like: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    collection_id: {
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
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'post'
  });
};
