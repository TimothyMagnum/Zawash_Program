//Grabs the NumberPlate input by Id
let numbaplate=document.getElementById("numberplate");
//Grabs the error Div for NumberPlate
let error_numberplate=document.getElementById("e_numberplate");

let color=document.getElementById("color")
let error_color=document.getElementById("e_color");

let doa=document.getElementById("date")
let error_doa=document.getElementById("e_doa")

let toa=document.getElementById("time")
let error_toa=document.getElementById("e_toa")

let make=document.getElementById("make")
let error_make=document.getElementById("e_make")

let CarWashPackage=document.getElementById("carwashpackage")
let error_cwp=document.getElementById("e_cwp")

let Washer=document.getElementById("washer")
let error_washer=document.getElementById("e_washer")

let Error=document.getElementById("ERROR")
let platenumber=/^[A-Z]{3}[0-9A-Z]{4}$/;

let validate_CarReg=()=>{
    if (color.value=="") {
        color.style.border="3px solid red"
        //error_color.innerHTML="Input a Car Colour"
        Error.innerHTML="Input a Car Colour"
        return false;
    } else {
        color.style.border="3px solid green"
    }
    if(numbaplate.value.match(platenumber)&&numbaplate.value!=""){
        numbaplate.style.border="3px solid green"
        //alert("Success NumberPlate")
    }else{
            //error_numberplate.innerHTML="Input The Number Plate starting with 3 Capital letters then 4 numbers or Capital letters"
            //alert("Failure in Number Plate")
            Error.innerHTML="Input The Number Plate starting with 3 Capital letters then 4 numbers or Capital letters"
            return false;
        }
    
    if (doa.value=="") {
        doa.style.border="3px solid red"
        //error_doa.innerHTML="Input the Date of the Arrival of the Car"
        Error.innerHTML="Input the Date of the Arrival of the Car"
        return false;
    } else {
        doa.style.border="3px solid green"
    }
    if (toa.value=="") {
        toa.style.border="3px solid red"
        //error_toa.innerHTML="Input the Time of the Arrival of the Car"
        Error.innerHTML="Input the Time of the Arrival of the Car"
        return false;
    } else {
        toa.style.border="3px solid green"
    }
    if (make.value=="") {
        make.style.border="3px solid red"
        //error_make="Input the Model of the Car"
        Error.innerHTML="Input the Model of the Car"
        return false;
    } else {
        make.style.border="3px solid green"
    }
    if (CarWashPackage.value=="") {
        CarWashPackage.style.border="3px solid red"
        //error_cwp.innerHTML="Select a Car Wash Package"
        Error.innerHTML="Select a Car Wash Package"
        return false;
    } else {
        CarWashPackage.style.border="3px solid green"
    }
    if (Washer.value=="") {
        Washer.style.border="3px solid red"
        //error_washer.innerHTML="Select a Washer"
        Error.innerHTML="Select a Washer"
        return false;
    } else {
        Washer.style.border="3px solid green"
    }
}

