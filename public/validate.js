let numberplate=()=>{
    let platenumber=/^[A-Z]{3}[0-9A-Z]{4}$/;
    let numplate=document.getElementById("username")
}
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
    //let number=/^[0-9]+$/
    let name=/^([a-zA-Z'-.]+[a-zA-Z'-.]+)$/
    let NINVal=document.getElementById("NationalId")
    let zawashVal=document.getElementById("zawashid")
    let numberVal=document.getElementById("phoneNumber")
    let nameVal=document.getElementById("name")
    let GenderVal=document.getElementById("gender")
    let PlaceVal=document.getElementById("place")
    
    let form=document.getElementById("register")

    
    form.addEventListener("submit",(e)=>{
        let messages=[]
        //e.preventDefault();
        if(PlaceVal.value!=""){
          PlaceVal.style.border="3px solid green"
        }else{
            PlaceVal.style.border="3px solid Red"
            //e.preventDefault() 
    
        }
        if(GenderVal.option.value=="M"||GenderVal.option.value=="F"){
          GenderVal.style.border="3px solid green"
        }else{
            GenderVal.style.border="3px solid red"
            messages.push("Gender must be either M or G")
            //e.preventDefault()
        }
       if(nameVal.value.match(name)&& nameVal.value.length >=8){
        nameVal.style.border="3px solid green"
        }else{
        nameVal.style.border="3px solid red"
        messages.push("Name should have one Capital Letter")
        //e.preventDefault()
    }
    if(NINVal.value.match(NIN)){
        NINVal.style.border="3px solid green"
    }else{
        NINVal.style.border="3px solid red"
        messages.push("NIN must start with 3 Captial Letters")
        //e.preventDefault()
    }
    if(zawashVal.value.match(zawashID)){
        zawashVal.style.border="3px solid green"
    }else{
        zawashVal.style.border="3px solid red"
        messages.push("Must start with Zwash followed by 3 numbers")
        //e.preventDefault()
    }
    if(numberVal.value>=10){
        numberVal.style.border="3px solid green"
    }else{
        numberVal.style.border="3px solid red"
        messages.push("Must contain 10 digits")
        //e.preventDefault()
    }  
    if(messages.length>0){
        errorElement.innerText=messages.join(',')
    }
    })
}