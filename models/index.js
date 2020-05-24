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

     notificationId:{
        type: Sequelize.SMALLINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
      employeeId: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      notificationType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modeOfCommunication:{
          type:Sequelize.STRING,
          allowNull: false,
      },

      isPublished: {
        type: Sequelize.STRING,
        allowNull: false,
        
      }
    });


    const employeedata = db.sequelize.define("employeedata", {
       employeeId:  {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
        employeeName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastLoginAt: {
          type: Sequelize.DATE(),
          allowNull: false
        }
             
      }); 
      
      
      const communicationmodes = db.sequelize.define("communicationmodes", {
        Id:  {
           type: Sequelize.INTEGER,
           allowNull: false,
           autoIncrement: true,
           primaryKey: true
       },
         notificationId: {
           type: Sequelize.INTEGER,
           allowNull: false,
         },
         mode: {
           type: Sequelize.TINYINT,
           allowNull: false,
         },
         notifiers: {
           type: Sequelize.STRING(),
           allowNull: false
         }
              
       }); 



module.exports = db ;

//module.exports = db;