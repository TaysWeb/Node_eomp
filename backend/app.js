// import  createError from ('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./routes/prods.js');
 
const app = express();
 
app.use(express.json());
 
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(cors());

// this next line will show my html page
app.use('/',express.static(path.join(__dirname , '/static')));

app.get( '/', (req, res) => {
      res.sendFile('./static/index.html');
})
 
app.use('/', indexRouter);
 
// Handling Errors
app.use((err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
 
app.listen(5050,() => console.log('Server is running on port http://localhost:5050'));