const express =require("express")
const router=express.Router()
const Expense=require('../models/Expenses')
//Launches the CostMonitor(where You input the items used by the washing Bay) to calculate Expenditure
router.get("/",(req,res)=>{
    res.render("CostMonitor")  
})
//Posts the data for the cost Monitor Form
router.post("/",(req,res)=>{
    const expense = new Expense(req.body);
    expense.save()
    res.redirect('costMonitor')
    console.log(req.body)
    res.send("Data Submitted for Cost")
})
module.exports=router;