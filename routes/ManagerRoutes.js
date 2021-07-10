//Imports the Express Module into Our Project
const express= require("express")
//It allows us to use the Express Router Functionality.
const router=express.Router()
//Renders the Register Manager Page
router.get("/",(req,res)=>{
    res.render("Manager")
})
router.post("/",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Manager")
})

//Exports the Router as a module.
module.exports=router;