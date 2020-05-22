//const express = require('express');
// const Router = require.Router();


const eventnotification = require('../notification/eventnotification');

//const mysqlConnection  = require("../connection"); 
const dbConfig = require("../dbconfig/db.config.js");

var bodyParser = require('body-parser')


var jsonParser = bodyParser.json()

module.exports = app =>{
   
  app.get('/',(req,res) =>{ 
        //res.send('{"testing"}');     
        mysqlConnection.query("SELECT * from userdata",(err,rows,fields)=>{
          if(!err){
           console.log("---query success rows:-----",rows);
           res.send(rows); 
                }
        else
        {
            console.log("-------query failure------");
        }
        });
        
        
        app.post('/api/createnotification',jsonParser,async (req,res) =>{    
          // let responses = await eventnotification.textQuery(req.body.text,req.body.userID,req.body.parameters);                         
          let responses = await eventnotification.createNotification(req.body.text,req.body.userID,req.body.parameters); 
         // res.send(responses[0].queryResult.fulfillmentMessages );
           console.log(responses);
               });    
      
      });


  app.get('/events',(req,res)=>{ 
   res.send(['celebration','aid','policy_declaration','nagarro_news']);
  });      
  
}