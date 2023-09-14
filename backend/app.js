// import  createError from ('http-errors');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./users/user_route.js');
 
// cookie-parsing 
const cookieParser = require('cookie-parser') ; 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})

 
app.use(express.json());
 
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));
 
// app.use(cors());

// // this next line will show my html page
// app.use('/',express.static(path.join(__dirname , '/static')));

// app.get( '/', (req, res) => {
//       res.sendFile('./static/index.html');
// })

app.use(
  express.static('./static'),
  express.urlencoded({
      extended: false
  }),
  cookieParser(),
  cors()
)
app.get('^/$|/challenger',
  (req, res)=> {
  res.sendFile(path.resolve(__dirname,
      './static/html/index.html'))
})
 
app.use("/users", userRoute);
 
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