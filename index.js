
const express = require('express');
const bodyParser = require('body-parser');
const data = require('./router/data.js');
const mongoose = require('mongoose');
const model = require('./model/coviddata.js');
var contactController = require('./controller/controller');

const app = express(); //initilaize the project
const PORT = 5000;  //specify the portb to use


mongoose.connect('mongodb://localhost/covidData', {useNewUrlParser: true})

var db = mongoose.connection;

if(!db)
    console.log(err);
else
    console.log("Conection good");

