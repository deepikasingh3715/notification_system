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
      querydata.isPublished = req.body.isPublished

 
      let responses = await eventnotification.createNotificationQuery(querydata);  
      res.send(responses);      
               });    
      
    


  app.get('/api/getnotification',jsonParser,(req,res)=>{ 

  });      
 
  


}