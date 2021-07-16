//Imports the Express Module into Our Project
const express= require("express")
const passport=require("passport")
//It allows us to use the Express Router Functionality.
const router=express.Router()

//checks username and password using passport
router.post('/', passport.authenticate('local',
    { failureRedirect: '/manager?alert=error' }),
    (req, res) => {
        req.session.user = req.user
        res.redirect('/home');
})
router.get('/logout', (req, res) => {
    req.session.destroy(()=> {
       res.redirect('/login')
     })
   })

//Exports the Router as a module.
module.exports=router;