const express = require('express');
const bodyParser = require('body-parser');
const mysql  = require('mysql');


const db = require("./models/index");

const cors = require('cors');


const app = express();
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json());

require('./routes/eventRoutes')(app)


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });





const PORT = process.env.PORT || 5000;

app.listen(PORT);

