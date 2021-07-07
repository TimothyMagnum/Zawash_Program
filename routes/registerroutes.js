//Imports the Express Module into Our Project
const express= require("express")
//It allows us to use the Express Router Functionality.
const router=express.Router()
//Renders the Register worker Page
router.get("/Registerworker",(req,res)=>{
    res.render("register")
})
//Renders the Register Manager Page
router.get("/Registermanager",(req,res)=>{
    res.render("managerregister")
})
//Posts the data for the Register Worker Form
router.post("/Registerworker",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for register")
})

//Posts the data for the Sign In Form
router.post("/Signin",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted")
})
//Posts the data for the Sign Up Form
router.post("/Signup",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted")
})
//Exports the Router as a module.
module.exports=router;