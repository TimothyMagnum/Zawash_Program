//Imports the Express Module into Our Project
const express= require("express")
//const mongoose = require('mongoose');
//It allows us to use the Express Router Functionality.
const router=express.Router()


//Launches the CarTracker(where You input the car details) to register the car
router.get("/",(req,res)=>{
    res.render("cartracker") 
})
//Posts the data for the car tracking Form
router.post("/",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for the Car")
})


//Exports the Router as a module.
module.exports=router;