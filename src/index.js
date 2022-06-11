const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://RinkiPradhan:moShtmwBC2cEopn2@cluster0.xs93j.mongodb.net/rinki123-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log (new Date().toISOString() +" "+req.socket.remoteAddress+" "+req.path);
        next();
  }
  );
  app.use('/', route);
//   const assignmentMW=function (req, res, next) {
//  var currentdate = new Date();
// var datetime =currentdate.getDate() + " "
//               +(currentdate.getMonth()+1) + " "
//               + currentdate.getFullYear() + " " 
//               + currentdate.getHours() + ":" 
//               + currentdate.getMinutes() + ":" 
//               + currentdate.getSeconds();
 
//     let ip=req.ip
//     let url= req.originalUrl

//     console.log('${datetime} ${ip} ${url}')
//      next()
//   }
  




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
