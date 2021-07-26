/* Starting 3 letters , Alphanumeric 7 in length*/
//let Name 
/*not less than 8 characters, no Numerics and must start with Capital letters */
//let Gender
/* A Letter in Capital */
//let dob
/*should be 18 years old */
//let nationalId
/*start with 3 letters and 11 in length*/
//let placeofresidence
//let ZwashID
/*Zwash then 3 random numbers*/
var Value=()=>{
    let errorElement=document.getElementById("error")
    let NIN=/^[A-Z]{3}[0-9A-Z]{8}$/;
    let zawashID=/^Zwash-([0-9]{3})$/
    let number=/^[0-9]{10}$/
    let name=/^([a-zA-Z'-.]+[a-zA-Z'-.]+)$/
    //let date=/^(0[1-9]|1[0-2])-([1-9]|[12][0-9]|3[01])-(19[5-9][0-9]|20[0-4]|2003)$/
    
    let NINVal=document.getElementById("NationalId")
    let zawashVal=document.getElementById("zawashid")
    let numberVal=document.getElementById("phoneNumber")
    let nameVal=document.getElementById("fullname")
    let GenderVal=document.getElementById("gender")
    let PlaceVal=document.getElementById("place")
    let dob=document.getElementById("date")
    //let form=document.getElementById("register")
    let messages=[]
    
    
        
        
    if(nameVal.value.match(name)){
    nameVal.style.border="3px solid green"
    }
    else{
    nameVal.style.border="3px solid red"
    //messages.push("Name should have one Capital Letter")
    errorElement.innerHTML="Name should have one Capital Letter"
    return false
    }
    if(numberVal.value.match(number)){
        numberVal.style.border="3px solid green"
    }else{
        numberVal.style.border="3px solid red"
        errorElement.innerHTML="Phone Number Must contain 10 digits"
        //messages.push("Phone Number Must contain 10 digits")
        return false
        //e.preventDefault()
    } 
    if(GenderVal.value==""){
            GenderVal.style.border="3px solid red"
            //messages.push("Select A Gender for the Worker")
            errorElement.innerHTML="Select A Gender for the Worker"
            return false;
        }else{
            GenderVal.style.border="3px solid green"
            //messages.push("Gender success")
        } 
            //This is where the Date Validation will take Place.//
    if(dob.value==""){
        dob.style.border="3px solid red"
        //messages.push("Input date in format mm/dd/yy")
        errorElement.innerHTML="Input date in format mm/dd/yy"
        return false    
            }else{
                dob.style.border="3px solid green"
            }
    if(NINVal.value.match(NIN)){
        NINVal.style.border="3px solid green"
    }else{
        NINVal.style.border="3px solid red"
        //messages.push("NIN must start with 3 Captial  followed by either 8 numbers or letters ")
        errorElement.innerHTML="NIN must start with 3 Captial  followed by either 8 numbers or letters"
        return false;
    }
    if(PlaceVal.value!=""){
        PlaceVal.style.border="3px solid green"
      }else{
          PlaceVal.style.border="3px solid red"
          errorElement.innerHTML="Input the Residence of the worker"
          return false;
      }
      
    if(zawashVal.value.match(zawashID)){
        zawashVal.style.border="3px solid green"
    }else{
        zawashVal.style.border="3px solid red"
        //messages.push("ZwashId Must start with Zwash- followed by 3 numbers")
        errorElement.innerHTML="ZwashId Must start with Zwash- followed by 3 numbers"
        return false;
    }
    
    
    if(messages.length>0){
        errorElement.innerText=messages.join(',')
    }
   
    
    
}