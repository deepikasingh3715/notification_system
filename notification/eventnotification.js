'use strict'

const db = require("../models/index");
var dbModels = db.sequelize.models;

const dbHelperNotification = require("../dbHelper/dbHelperNotification");

const sequelize = require('sequelize');

module.exports = { 
  
  createNotificationQuery: async function(queryData){
   
   let createNotification = await dbHelperNotification.createNotification(queryData); 
   console.log("\n\n\n createNotification(eventnotification):",createNotification);
   return createNotification;
   },

   
   verifyLoginQuery: async function(logindata){  

     var verifiedLoginData = await dbHelperNotification.verifyLogin(logindata);
     console.log("\n\n\n  verifiedLoginData(eventnotification): ",verifiedLoginData);
     let updatedLastLogin = await dbHelperNotification.updateLastLogin(verifiedLoginData.dataValues.employeeName);
      console.log("\n\n\n  updatedLastLogin(eventnotification): ",updatedLastLogin);
        
      return verifiedLoginData;

     },


    checkLastLogin : async function(lastLoginAtData){
      var lastLoginData = await dbHelperNotification.checkLastLogin(lastLoginAtData);
      console.log("\n\n\n    lastLoginData(event notifiaction):  ",lastLoginData);
     // return lastloginAtResult;
      return lastLoginData;

    } ,



     anyNotification:async function(checkedLastLogin){
      var notificationData  = await dbHelperNotification.checkNotification(checkedLastLogin); 
      console.log("\n\n\n\n  notificationData(event notification) : ",notificationData);
     
      return notificationData;
     }
  


}