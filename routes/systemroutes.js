//Imports the Express Module into Our Project
const express= require("express")
const Vehicle=require('../models/Vehicle')
//It allows us to use the Express Router Functionality.
const router=express.Router()
const Washer=require('../models/Washer')
washPackages={
    smallCar:{washerFee:3000 , packagePrice:10000},
    mediumCar:{washerFee:4000 , packagePrice:15000},
    fullWash:{washerFee:5000 , packagePrice:20000},
    bodaboda:{washerFee:1500 , packagePrice:5000},
    engine:{washerFee:2000 , packagePrice:10000}
}
//Launches the CarTracker(where You input the car details) to register the car
router.get("/",async(req,res)=>{
    let washerlist = await Washer.find();
    
    res.render("CarTracker", { washers: washerlist})
})
//Posts the data for the car tracking Form
router.post("/", async(req,res)=>{
    try {
        // combine the date and time
        console.log(req.body)
        let data = req.body
        let datetimeArrival = Date.parse(data.doa + 'T' + data.toa)
        data.datetimeArrival = datetimeArrival
        
        // //derive the package price and the washer fee
        let packageDetails = washPackages[data.package]
        console.log(data.packageDetails)
        data.packagePrice = packageDetails['packagePrice']
        data.washerFee = packageDetails['washerFee']
        
        const vehicle = new Vehicle(req.body);
        await vehicle.save()
        //res.redirect('vehicle?alert=success')
        res.redirect("carTracker")
    }
    catch (err) {
        res.status(400).render("carTracker", { title: "Register Vehicle",routeName:"carTracker", alert: 'error' })
        console.log(err)
    }
})


//Exports the Router as a module.
module.exports=router;