const Sequlize = require('sequelize');
const sequelize = require('../database')

const Product = sequelize.define('students', {
    id: Sequlize.INTEGER,
    title: Sequlize.STRING,
    price: Sequlize.DOUBLE
})

module.exports = Product;