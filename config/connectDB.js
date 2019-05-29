const Sequelize = require('sequelize');

const sequelize = new Sequelize('makefriends', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: "+08:00",
    timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        get() {
            return moment(this.getDataValue('timestamp')).format('YYYY-MM-DD HH:mm:ss')
        }
    }
});

module.exports = sequelize