const express = require('express');
const bodyParser = require('body-parser');
const mysql  = require('mysql');
const mysqlConnection  = require("./connection"); 

const db = require("./models/index");
const Notification = db.notifications;
//const Op = db.Sequelize.Op;
//const Op = db.Op;

const app = express();
app.use(bodyParser.json());

require('./routes/eventRoutes')(app)


//const db = require("./models");
//db.sync({alter:true});
//db.sequelize.sync({alter:true});
console.log("\n\n   synced data  \n\n");

//exports.create = (req, res) => {s
//};

const jane =  db.Notification.create({
    notificationId:"2",
    userId: "2",
    notificationType:"2",
    description:"asdfg",
    modeOfCommunication:"2",
    isPublished:"yes"
});

console.log(jane);


const PORT = process.env.PORT || 5000;

app.listen(PORT);

