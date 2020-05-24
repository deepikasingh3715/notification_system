const express = require('express');
const bodyParser = require('body-parser');
const mysql  = require('mysql');


const db = require("./models/index");
//const Op = db.Sequelize.Op;
//const Op = db.Op;

const app = express();
app.use(bodyParser.json());

require('./routes/eventRoutes')(app)


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


//const db = require("./models");
//db.sync({alter:true});
//db.sequelize.sync({alter:true});


const PORT = process.env.PORT || 5000;

app.listen(PORT);

