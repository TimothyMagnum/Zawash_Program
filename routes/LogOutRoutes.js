//Imports the Express Module into Our Project
const express= require("express")
//const mongoose = require('mongoose');
//It allows us to use the Express Router Functionality.
const router=express.Router()
////Launches the LogOut(which Calculates the Total Costs) for the day
router.get("/",(req,res)=>{
    res.render("logout")  
})
//Posts the data for the Logout Form
router.post("/",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Logout")
})
module.exports=router;