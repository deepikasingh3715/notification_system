'use strict'
const db = require("../models/index");
const sequelize = require('sequelize');
const dbModels = db.sequelize.models;
const Op = db.Sequelize.Op;

module.exports={

    createNotification: async function(Notificationdata){

        try {
            let creatednotificationdata = await dbModels.notifications.create(Notificationdata);
            return creatednotificationdata;
        } catch (err) {
            throw new Error(err);
        }
    
    },



    verifyLogin: async function(loginCredential){
        var employeeName = loginCredential.employeeName;
        var emailId =  loginCredential.emailId;
        var password = loginCredential.password;

            try {
                let isVerifiedByUserName = await dbModels.employeedata.findOne({
                    where: 
                    {
                         employeeName: employeeName
                    }      
               });

                let data;
                if (loginCredential.employeeName == (isVerifiedByUserName.dataValues.employeeName) && loginCredential.password ==(isVerifiedByUserName.dataValues.password))
                { 
                    data = isVerifiedByUserName ;
                }
                 else
                 { 
                     data="password is incorrect\n\n";                  
                 }
                
            
            return data;
            } catch (err) {
                console.log("\n\ninvalid username \n\n");
  
            }
        },


        updateLastLogin: async function(employeeName){
            try{
                let newDate = Date();
                console.log("\n\n--------newDate----",newDate);
            let updatedLastLoginAt = await dbModels.employeedata.update({
                lastLoginAt: newDate
            }, {
                where: {
                    employeeName: employeeName
                } 
                 
           });        
        }catch(err){console.log("\n\n\nCould not update user's lastLogin\n\n\n")}


        },



        checkLastLogin: async function(lastLoginAtData){
            let employeeName = lastLoginAtData.employeeName;
             try{
            let lastLoginAtResult = await dbModels.employeedata.findOne({
                attributes: ['lastLoginAt'],
                where: 
                {
                     employeeName: employeeName
                }      
           });
                console.log("\n\n\n  lastLoginAtResult(dbHelper) :\n\n\n",lastLoginAtResult);

           return lastLoginAtResult;
        }catch(err){console.log("\n\n Error in finding lastloginAt \n\n");}

        },



        checkNotification: async function(lastLoginData){     
          
            try {
                let results = await dbModels.notifications.findAndCountAll({
                    attributes: ['notificationId','notificationType','description','createdAt'],
                    where: {
                        createdAt: {
                          [Op.gte]: lastLoginData.dataValues.lastLoginAt                  
                      }
                    }
                });
    

                console.log("\n\n\n\n  UNSEEN NOTIFICATIONS :",results);
                return {
                    results
                };
            } catch (err) {
                console.log("\n\n\n\n CAN NOT RETRIVE :(");
            }               
                
            }        
    }







