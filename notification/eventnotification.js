'use strict'

//const config = require('../config/keys');
//const structjson  = require('./structjson');
//const mongoose = require('mongoose');
const db = require("../models/index");
var dbModels = db.sequelize.models;

const dbHelperNotification = require("../dbHelper/dbHelperNotification");

const sequelize = require('sequelize');

module.exports = { 
  
  createNotificationQuery: async function(queryData){
  console.log("/n/n/n------queryData------",queryData);
  //createNotificationQuery: async function(notificationId,employeeId,notificationType,description,modeOfCommunication,isPublished){
   
  
  //createNotificationQuery: async function(text,parameters={}){
   
  //  let self = module.exports;
  //   const request = {
  //       session: sessionPath,
  //       queryInput: {
  //         text: {
  //           text:text,
  //           //languageCode: 'config.dialogFlowSessionLanguageCode',
  //           languageCode:'en-US',
  //         },
  //       },
  //       queryParams:{
  //        payload:{
  //             data:parameters
  //         }
  //        }
  //     };

  // var newEntry = {};
  // newEntry.notificationId = notificationId;
  // newEntry.employeeId = employeeId;
  // newEntry.notificationType = notificationType;
  // newEntry.description = description ;
  // newEntry.modeOfCommunication = modeOfCommunication ;
  // newEntry.isPublished = isPublished;
  





 console.log("-------------HAPPY PATH------------");
 //let responses = await dbModels.notifications.create(newEntry);
   //let createNotification = await dbHelperNotification.createNotification(newEntry);
   
   let createNotification = await dbHelperNotification.createNotification(queryData);   
   
   //let responses = await sessionClient.detectIntent(request);
    //responses = await self.handleAction(responses);

    //return responses;
   },


  //  handleAction:function(responses){
  //   let self = module.exports;
  //   let queryResult = responses[0].queryResult;

  //   switch (queryResult.action) {
  //       case 'recommendcourses-yes':
  //           if (queryResult.allRequiredParamsPresent) {
  //             self.saveRegistration(queryResult.parameters.fields);
  //           }
  //           break;
  //   }

  //   return responses;     
  //  },


}