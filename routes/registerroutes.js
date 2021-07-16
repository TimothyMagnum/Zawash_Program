//Imports the Express Module into Our Project
const express= require("express")
//It allows us to use the Express Router Functionality.
const router=express.Router()
const Washer=require('../models/Washer')

//Renders the Register worker Page
router.get("/",(req,res)=>{
    res.render("Register",{alert:req.query.alert})
})
router.post("/", (req,res)=>{
    try{
        const washer = new Washer(req.body);
        washer.save()
        res.redirect('register')
        //res.redirect("Register?alert=success")
    }catch(err){
       //res.status(400).render("Register?alert=error",{alert:req.query.alert})
    }
     
})




//Exports the Router as a module.
module.exports=router;