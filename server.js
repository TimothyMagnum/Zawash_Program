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
const Systemroutes=require("./routes/systemroutes")
const Registerroutes=require("./routes/registerroutes")
//Using the Express Library
app.use(express.urlencoded({extended:true}))
//We are using the SystemRoutes as a middleware.
app.use("/",Systemroutes)
//We are using the RegisterRoutes as a middleware.
app.use("/",Registerroutes)


//Not found Route , that is executed when the Route is not Found
app.get("*",(req,res)=>{
    // res.send("This route doesnt exist")
    res.status(404).send("This is an Invalid URL")
 })
 //Creates the server
app.listen(3000,()=>{
    console.log("Listening on Port 3000")
})