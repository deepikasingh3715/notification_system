//const express = require('express');
// const Router = require.Router();
const eventnotification = require('../notification/eventnotification');
const db = require("../models/index");
const dbConfig = require("../dbconfig/db.config.js");

var bodyParser = require('body-parser')
var dbModels = db.sequelize.models;
var jsonParser = bodyParser.json()

module.exports = (app) =>{
   
  app.get('/',(req,res) =>{      
       res.send("test");
  });
        
      
  app.post('/api/createnotification',jsonParser,async (req,res) =>{  
      var querydata={};
      querydata.notificationId=req.body.notificationId,
      querydata.employeeId =req.body.employeeId,
      querydata.notificationType = req.body.notificationType,
      querydata.description = req.body.description,
      querydata.modeOfCommunication = req.body.modeOfCommunication,
      querydata.notifiers = req.body.notifiers,
      querydata.isPublished = req.body.isPublished

 
      let responses = await eventnotification.createNotificationQuery(querydata); 
      console.log("\n\n\n\n\n responses from craetenotification api :",responses); 
      res.send(responses);      
               });    
      
  
    app.post('/api/login',jsonParser,async(req,res)=>{ 

    var logindata={};
    logindata.employeeName=req.body.employeeName,
    logindata.emailId=req.body.emailId,
    logindata.password =req.body.password

    let verifiedLoginResponse = await eventnotification.verifyLoginQuery(logindata);
    
    res.send(verifiedLoginResponse);  

  });   
  
  app.post('/api/getnotification',jsonParser,async(req,res)=>{ 

    var dataQuery={};
    dataQuery.employeeName=req.body.employeeName,
    dataQuery.emailId=req.body.emailId

   
    let checkedLastLogin = await eventnotification.checkLastLogin(dataQuery);
    console.log("\n\n\n^^^^^^^^^^ checkLastLogin from event routes ^^^^^^^^^^^^",checkedLastLogin);
    let getNotification = await eventnotification.anyNotification(checkedLastLogin);
   
    console.log("\n\n\n\n\n  getNotification from event routes checkedLastLogin",getNotification);

    res.send(getNotification);  

  });   
 

  


}