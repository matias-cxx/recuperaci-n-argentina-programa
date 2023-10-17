const{Sequelize}=require ('sequelize')
//para establecer la conexion a la base de datos
const sequelize=  new Sequelize('ejs', 'root','',{
    host:'localhost',
    dialect:'mysql'
});
module.exports={sequelize}
