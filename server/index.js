const bodyParser = require('body-parser');
const express = require('express');
const port = process.env.PORT || 2400;
const http = require('http');    
const cors = require('cors');
const massive = require("massive");
const controller = require('./controller');
const secrets = require('./secrets.js');
require('dotenv').config();

//middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());

//db config
massive({
    host: 'localhost',
    port: secrets.port,
    database: secrets.database,
    user: secrets.user,
    password: secrets.password,
    ssl: false
  }).then(db => {
    app.set('db', db);
  });

//routes
app.get('/api/injuries', controller.getAll);




//Set up static files
app.use(express.static('build'));

//Listening to port
app.listen(process.env.PORT || port, () => {
console.log(`Now listening on port ${port}`);
});

