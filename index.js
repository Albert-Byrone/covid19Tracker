
const express = require('express');
const bodyParser = require('body-parser');
const data = require('./router/data.js');
const mongoose = require('mongoose');
const model = require('./model/coviddata.js');
var contactController = require('./controller/controller');

const app = express(); //initilaize the project
const PORT = 5000;  //specify the portb to use

