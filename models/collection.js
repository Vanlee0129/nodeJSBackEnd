/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collection', {
    collection_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    post_id: {
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
    },
    collection_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'collection'
  });
};
