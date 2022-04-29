const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-ruleencoded
app.use(bodyParser.urlencoded({extended:false}));

// parse request data content type aplication/json
app.use(bodyParser.json());

// define root route
app.get('/',(req,res)=> {
    res.send('Hello World');
});

// import employee routes
const employeeRoutes = require('./src/routes/employee.route');

// create employee routes
app.use('/api/v1/employee',employeeRoutes);

// listen to the port
app.listen(port,()=> {
    console.log(` Server is runing at ${port}`);
});