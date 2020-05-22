//const Sequelize = require('sequelize');
const dbConfig = require("../dbconfig/db.config.js");
const db = require("./index");
const dbSequelize = db.sequelize;

const Op = db.Sequelize.Op;

// const db = new Sequelize({
//   dialect: 'mysql', // mysql, postgres, mssql
//  // storage: __dirname + '/vendors.db'
//    database : '',
//   // host: 'localhost',
//   // username: '',
//   // password: '',
//   // port: ''
// })

//sequelize = new Sequelize(dbConfig['database'], dbConfig['username'], dbConfig['password'], dbConfig);
//sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password);

module.exports = (sequelize, Sequelize) => {

//  module.exports=(dbSequelize)=>{ 
    
   //const notifications = dbSequelize.define("notifications", {
    const notifications = sequelize.define("notifications", {
 
     notificationId:{
     type: Sequelize.STRING,
     allowNull: false,
     //autoIncrement: true,
     primaryKey: true
    },
      userId: {
        type: Sequelize.STRING
      },
      notificationType: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      modeOfCommunication:{
          type:Sequelize.STRING
      },

      isPublished: {
        type: Sequelize.STRING
      }
    });

     return notifications;
  }
    //return notifications;
  







