const Sequlize = require('sequelize');

const sequelize = new Sequlize('db', 'database', 'Jaideep@123456', {
    host: 'dbserveravailable.database.windows.net',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true
    }
})

module.exports = sequelize;