/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photo', {
    photo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    photo_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'photo'
  });
};
