const express =require("express")
const router=express.Router()
//Launches the CostMonitor(where You input the items used by the washing Bay) to calculate Expenditure
router.get("/",(req,res)=>{
    res.render("costmonitor")  
})
//Posts the data for the cost Monitor Form
router.post("/",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Cost")
})
module.exports=router;