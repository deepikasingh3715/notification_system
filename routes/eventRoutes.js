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
  
    console.log("\n\n\n  req.body(routes) :  ",req.body);

      let querydata= req.body.createnotification;
      //  let querydata={};
      // querydata.notificationId=req.body.notificationId,
      // querydata.employeeId =req.body.employeeId,
      // querydata.notificationType = req.body.notificationType,
      // querydata.description = req.body.description,
      // querydata.modeOfCommunication = req.body.modeOfCommunication,
      // querydata.notifiers = req.body.notifiers,
      // querydata.isPublished = req.body.isPublished

      console.log("\n\n\n  querydata(routes) :  ",querydata);

      let responses = await eventnotification.createNotificationQuery(querydata); 
      console.log("\n\n\n\n\n responses(eventRouets) :  ",responses); 
      res.send(responses);      
               });    
      
  
    app.post('/api/login',jsonParser,async(req,res)=>{ 

      console.log("\n\n\n  req.body.userLoginData(eventRoutes)  :  ",req.body.userLoginData);


      var logindata = req.body.userLoginData;
    //var logindata={};
    // logindata.employeeName=req.body.employeeName,
    // logindata.emailId=req.body.emailId,
    // logindata.password =req.body.password

    let verifiedLoginResponse = await eventnotification.verifyLoginQuery(logindata);
    console.log("\n\n\n   verifiedLoginResponse(eventRoutes) : ",verifiedLoginResponse);
    res.send(verifiedLoginResponse);  

  });   
  
  app.post('/api/getnotification',jsonParser,async(req,res)=>{ 

    console.log("\n\n\n  dataQuery(eventRoutes)  :",req.body);

     let dataQuery = req.body.userData;
    // var dataQuery={};
    // dataQuery.employeeName=req.body.employeeName,
    // dataQuery.emailId=req.body.emailId
   
    let checkedLastLogin = await eventnotification.checkLastLogin(dataQuery);
    console.log("\n\n\n  checkedLastLogin(eventRoutes) :",checkedLastLogin);
    let getNotification = await eventnotification.anyNotification(checkedLastLogin);
    console.log("\n\n\n\n\ getNotification(eventRouets) :  ",getNotification);

    res.send(getNotification);  

  });   
 

  


}