const bodyParser = require('body-parser');
const express = require('express');
const port = process.env.PORT || 2400;
const http = require('http');    
const cors = require('cors');
const massive = require("massive");
const products_controller = require('./products_controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

//routes
app.post( '/api/product', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/product/:id', products_controller.getOne );
app.put( '/api/product/:id', products_controller.update );
app.delete( '/api/product/:id', products_controller.delete );


//Set up static files
app.use(express.static('build'));

//Listening to port
app.listen(process.env.PORT || port, () => {
console.log(`Now listening on port ${port}`);
});

