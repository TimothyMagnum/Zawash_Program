//Imports the Express Module into Our Project
const express= require("express")
//It allows us to use the Express Router Functionality.
const router=express.Router()
//Launches the Whole Zawash system
router.get("/system",(req,res)=>{
    res.render("system")  
})
//Launches the CarTracker(where You input the car details) to register the car
router.get("/cartracker",(req,res)=>{
    res.render("cartracker") 
})
//Launches the CostMonitor(where You input the items used by the washing Bay) to calculate Expenditure
router.get("/costmonitor",(req,res)=>{
    res.render("costmonitor")  
})
////Launches the LogOut(which Calculates the Total Costs) for the day
router.get("/logout",(req,res)=>{
    res.render("logout")  
})
//Posts the data for the Logout Form
router.post("/logout",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Logout")
})
//Posts the data for the cost Monitor Form
router.post("/COST",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Cost")
})
//Posts the data for the car tracking Form
router.post("/car",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Cost")
})
//Exports the Router as a module.
module.exports=router;