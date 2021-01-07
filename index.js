
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

app.get('/', (req, res)=>res.send("HEllo from ALbert"));

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', data);


app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`))