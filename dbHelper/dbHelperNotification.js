
'use strict'
const db = require("../models/index");
const sequelize = require('sequelize');
const dbModels = db.sequelize.models;

module.exports={

    createNotification: async function(Notificationdata){

        try {
            let creatednotificationdata = await dbModels.notifications.create(Notificationdata);
            return creatednotificationdata;
        } catch (err) {
            throw new Error(err);
        }
    
    }







}

// class dbHelperNotification{
  
//  async createNotification(Notificationdata) {
//     let newNotificationData = {};
    

//     try {
//         let creatednotificationdata = await dbModels.create(Notificationdata);
//         //let file = await this.models['uploadedfile'].create(newFile);
//         return creatednotificationdata;
//     } catch (err) {
//         throw new Error(err);
//     }

// }




// }


