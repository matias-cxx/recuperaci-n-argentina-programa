const { DataTypes } = require('sequelize')
const{sequelize}=require ('../../database')


const PostModel = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,

})

module.exports = {PostModel}