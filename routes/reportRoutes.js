const express =require("express")
const router=express.Router()
const Vehicle=require("../models/Vehicle")
const moment=require("moment")

router.get("/",async(req,res)=>{
  try{ let selectedDate = moment().format('YYYY-MM-DD')
  if(req.query.searchdate) selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD') 
    let washedVehicles = await Vehicle.aggregate( [ 
      {$match: {doa: new Date(selectedDate)}}, 
      {$group: { _id: '$washer', count: { $sum: 1 }, totalPayout: {$sum:'$washerFee'} } }, 
      {$lookup: { from:'washers', localField:'_id', foreignField:'_id', as:"details"}} ])
      //gettin total payout of washers for each selected date. 

      let totalPayoutPerDay = await Vehicle.aggregate( [ 
        {$match: {doa: new Date(selectedDate)}},
        {$group: {_id:'$doa', totalPayoutPerDay: {$sum: '$washerFee'}}} ] )
          res.render("workerReports" , {washers: washedVehicles, title:"List of Car Washers", defaultDate:selectedDate, sumPayout:totalPayoutPerDay[0]}) 
        }
          catch(err) {  
              res.status(400).render("workerReports", { title: "Dashbord ZaWash", alert: 'error' })
          console.log(err)
        }


})
module.exports=router;