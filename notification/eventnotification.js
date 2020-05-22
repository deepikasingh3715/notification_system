'use strict'

//const config = require('../config/keys');
//const structjson  = require('./structjson');
//const mongoose = require('mongoose');

const sequelize = require('sequelize');

module.exports = {
   createNotification: async function(text,parameters={}){
 
   let self = module.exports;
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text:text,
            //languageCode: 'config.dialogFlowSessionLanguageCode',
            languageCode:'en-US',
          },
        },
        queryParams:{
         payload:{
              data:parameters
          }
         }
      };


 console.log("-------------HAPPY PATH------------");

     //let createdEvent = await 
    //let responses = await sessionClient.detectIntent(request);
    //responses = await self.handleAction(responses);

    //return responses;
   },

   eventQuery: async function(event,parameters){
  // eventQuery: async function(event){
    let self = module.exports;
    const request = {
        session: sessionPath,
        queryInput: {
          event: {
            name:event,
            parameters:structjson.jsonToStructProto(parameters),//js to protostruct
            languageCode: 'en-US',
          },
        }
        
      };

    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;

   },

   handleAction:function(responses){
    let self = module.exports;
    let queryResult = responses[0].queryResult;

    switch (queryResult.action) {
        case 'recommendcourses-yes':
            if (queryResult.allRequiredParamsPresent) {
              self.saveRegistration(queryResult.parameters.fields);
            }
            break;
    }

    return responses;     
   },


//  saveRegistration:function(fields){
//   const registration = new Registration({
//     name: fields.name.stringValue,
//     address: fields.address.stringValue,
//     phone: fields.phone.stringValue,
//     email: fields.email.stringValue,
//     dateSent: Date.now()
// });
// try{
//     let reg = await registration.save();
//     console.log(reg);
// } catch (err){
//     console.log(err);
// }
//}


}