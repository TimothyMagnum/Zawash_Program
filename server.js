//Imports the Express Module into Our Project
const express =require("express")
const path = require('path');
const systemroutes=require("./routes/systemroutes")
const registerroutes=require("./routes/registerroutes")
const CostRoutes=require("./routes/CostRoutes")
const LogOutRoutes=require("./routes/LogOutRoutes")
const ManagerRoutes=require("./routes/ManagerRoutes")
require('dotenv').config();


//...
const mongoose = require('mongoose');

//Instantaites the app Object from the Express Module
const app=express()
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
app.use(express.urlencoded({extended:true}))
//We are using the SystemRoutes as a middleware.
app.use("/cartracker",systemroutes)
//We are using the RegisterRoutes as a middleware.
app.use("/register",registerroutes)
app.use("/costmonitor",CostRoutes)
app.use("/logout",LogOutRoutes)
app.use("/Manager",ManagerRoutes)

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

 
//Not found Route , that is executed when the Route is not Found
app.get("*",(req,res)=>{
    // res.send("This route doesnt exist")
    res.status(404).send("This is an Invalid URL")
 })

 //Creates the server
app.listen(3000,()=>{
    console.log("Listening on Port 3000")
})