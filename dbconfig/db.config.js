const mysql  = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"NotificationSystem",
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
        console.log("connection established from db.config.js");
    }
    else
    {
        console.log("failure");
    }

})

module.exports = mysqlConnection.config;