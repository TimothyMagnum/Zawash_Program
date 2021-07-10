//Imports the Express Module into Our Project
const express= require("express")
//It allows us to use the Express Router Functionality.
const router=express.Router()
const Washer=require('../models/Washer')
const mongoose=require("mongoose")
//Renders the Register worker Page
router.get("/",(req,res)=>{
    res.render("register")
})
router.post("/",(req,res)=>{
    console.log(req.body)
    
    const washer = new Washer(req.body);
             washer.save()
               .then(() => { res.send('Thank you for your registration!');
             })
              .catch((err) => {
                 console.log(err);
                 res.send('Sorry! Something went wrong.');
    
      
     res.send("Data Submitted for worker")
    })

})
//Posts the data for the Register Worker Form
 ////router.post("/Registerworker",(req,res)=>{
     //console.log(req.body)
     //res.send("Data Submitted for register")
//     /*
//     if (errors.isEmpty()) {
//         const washer = new washer(req.body);
//         washer.save()
//           .then(() => { res.send('Thank you for your registration!');
//          })
//          .catch((err) => {
//             console.log(err);
//             res.send('Sorry! Something went wrong.');
//           });
//       } else {
//         //
//       }
//       */
// })

// router.post("/Loginmanager",(req,res)=>{
//     console.log(req.body)
//     res.send("Data Submitted")
// })
//Posts the data for the Sign In Form
// router.post("/Signin",(req,res)=>{
//     console.log(req.body)
//     res.send("Data Submitted")
// })
//Posts the data for the Sign Up Form

//Exports the Router as a module.
module.exports=router;