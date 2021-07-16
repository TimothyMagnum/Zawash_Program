//Imports the Express Module into Our Project
const express= require("express")
//It allows us to use the Express Router Functionality.
const router=express.Router()
const Manager=require('../models/Manager')
//Renders the Register Manager Page
router.get("/",(req,res)=>{
    res.render("manager",{alert: req.query.alert})
})

router.post("/", async (req, res) => {
    
    const manager = new Manager(req.body);
    await Manager.register(manager, req.body.password, (err) => {
        if (err) {
            res.status(400).render('manager', { title: "Register Manager", alert: 'error' })
            console.log(err)
        } else {
            res.redirect('carTracker')
        }
    })
})

   

//Exports the Router as a module.
module.exports=router;