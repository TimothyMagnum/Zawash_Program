//Imports the Express Module into Our Project
const express= require("express")
const passport=require("passport")
//It allows us to use the Express Router Functionality.
const router=express.Router()

router.get('/',(req,res)=>{
  res.render("loginManager")
})

//checks username and password using passport
router.post('/', passport.authenticate('local',
    ),
    (req, res) => {
        req.session.user = req.user
        console.log(req.user)
        res.redirect('/carTracker');
})

router.get('/logout', (req, res) => {
    req.session.destroy(()=> {
       res.redirect('/loginManager')
     })
   })

//Exports the Router as a module.
module.exports=router;