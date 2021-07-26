//Imports the Express Module into Our Project
const express =require("express")
const path = require('path');
const systemroutes=require("./routes/systemRoutes")
const registerroutes=require("./routes/registerRoutes")
const costRoutes=require("./routes/costRoutes")
const summaryRoutes=require("./routes/summaryRoutes")
const managerRoutes=require("./routes/managerRoutes")
const homeRoutes=require("./routes/homeRoutes")
const reportRoutes=require("./routes/reportRoutes")
const authRoutes=require("./routes/authRoutes")
const moment = require('moment');
const passport=require("passport")
const Manager=require('./models/Manager')
const expressSession=require("express-session")({
  secret:"secret",
  resave:"false",
  saveUninitialized:false
})
//...
const mongoose = require('mongoose');
require('dotenv').config();




//Instantaites the app Object from the Express Module
const app=express()
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
//...
//require('./models/washer');
//Makes the Files in the views Folder static
app.use(express.static(__dirname+"/views"))
app.use(express.static(path.join(__dirname, 'public')));

//Sets the view Engine to pug
app.set("view engine","pug")
//Sets the View to files in the views folder
app.set("views","./views")


//Using the Express Library
app.locals.moment = moment
app.use(express.urlencoded({extended:true}))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(Manager.createStrategy());
passport.serializeUser(Manager.serializeUser());
passport.deserializeUser(Manager.deserializeUser());

var loginChecker=function(req,res,next){
  if(req.path!="/loginManager"&& req.path!="/"&& !req.session.user){
    res.redirect("/loginManager")
  }
  next()
}
app.use(loginChecker)

//We are using the SystemRoutes as a middleware.
app.use("/carTracker",systemroutes)
//We are using the RegisterRoutes as a middleware.
app.use("/register",registerroutes)
app.use("/costMonitor",costRoutes)
app.use("/summary",summaryRoutes)
app.use("/signupManager",managerRoutes)
app.use("/loginManager",authRoutes)
app.use("/home",homeRoutes)
app.use("/workerReports",reportRoutes)
app.use("/washer-details",reportRoutes)
app.use("/expenses-report",reportRoutes)
app.use("/collection",reportRoutes)

//Not found Route , that is executed when the Route is not Found
app.get("*",(req,res)=>{
    // res.send("This route doesnt exist")
    res.status(404).send("This is an Invalid URL")
 })

 //Creates the server
app.listen(3000,()=>{
    console.log(" We are Listening on Port 3000")
})