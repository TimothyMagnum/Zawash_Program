//Imports the Express Module into Our Project
const express =require("express")
//Instantaites the app Object from the Express Module
const app=express()
//Makes the Files in the views Folder static
app.use(express.static(__dirname+"/views"))
//Sets the view Engine to pug
app.set("view engine","pug")
//Sets the View to files in the views folder
app.set("views","./views")
//Using the Express Library
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("cartracker")  
})

app.get("/Registerworker",(req,res)=>{
    //res.render("registerwasher")
    res.render("Register")
})
app.get("/system",(req,res)=>{
    res.render("CarwashTrack")  
})
app.get("/costmonitor",(req,res)=>{
    res.render("costmonitor")  
})

app.get("/logout",(req,res)=>{
    res.render("logout")  
})
app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted")
})
app.post("/logout",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Logout")
})
app.post("/COST",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Cost")
})
app.post("/car",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for Cost")
})
app.post("/Registerworker",(req,res)=>{
    console.log(req.body)
    res.send("Data Submitted for register")
})

//Sixth Route , that is executed when the Route is not Found
app.get("*",(req,res)=>{
    // res.send("This route doesnt exist")
    res.status(404).send("This is an Invalid URL")
 })
 //Creates the server
app.listen(3000,()=>{
    console.log("Listening on Port 3000")
})