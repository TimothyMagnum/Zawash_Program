//Imports the Express Module into Our Project
const express= require("express")
//It allows us to use the Express Router Functionality.
const router=express.Router()
const Manager=require('../models/Manager')
//const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');

//Renders the Register Manager Page
router.get("/",(req,res)=>{
    res.render("signupManager")
})

router.post("/", async (req, res) => {
    const manager = new Manager(req.body);
    console.log(req.body)
    await Manager.register(manager, req.body.password, (err) => {
        if (err) {
            res.status(400).render('signupManager', { title: "Register Manager" })
            console.log(err)
        } else {
            res.redirect('signupManager')
        }
    })
})

   

//Exports the Router as a module.
module.exports=router;