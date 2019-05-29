/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    school_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
