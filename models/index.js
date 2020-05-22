const dbConfig = require("../dbconfig/db.config.js");

const Sequelize = require("sequelize");

//const dbconfig = dbConfig.config;

const sequelize = new Sequelize(dbConfig.database, dbConfig.user,dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  dialect:'mysql',
  //operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const notifications = db.sequelize.define("notifications", {
    //const notification = sequelize.define("notification", {

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








//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);


module.exports = { db,notifications };

//module.exports = db;