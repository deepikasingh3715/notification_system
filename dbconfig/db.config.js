const mysql  = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"notificationsystem",
    multipleStatements : true,
    //debug: true,
    dialect: "mysql",
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("connection established");
    }
    else
    {
        console.log("connection failed");
    }

})

module.exports = mysqlConnection.config;