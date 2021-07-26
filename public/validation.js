let Signup=()=>{
    let name=/^[A-Za-z]+$/
    let number=/^[0-9]{10}$/
    let password=/^[0-9a-zA-Z]+$/
    let email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    let FnameVal=document.getElementById("fullname")
    let nameVal=document.getElementById("username")
    let numberVal=document.getElementById("phonenumber")
    let passwordVal=document.getElementById("password")
    let ConfirmVal=document.getElementById("confirm")
    let emailVal=document.getElementById("email")
    let isempty=true;
    let error_fullname=document.getElementById("error0")
    let error_username=document.getElementById("error1")
    let error_phonenumber=document.getElementById("error2")
    let error_email=document.getElementById("error3")
    let error_password=document.getElementById("error4")
    let error_confirm=document.getElementById("error5")
    //let form=document.getElementById("signup")

    
        if (FnameVal.value.match(name)) {
            FnameVal.style.border="3px solid green"
        } else {
            FnameVal.style.border="3px solid red"
            error_fullname.innerHTML="Input Your Full Name"
            return false;
        }

        if(nameVal.value.match(name)){
            nameVal.style.border="3px solid green"
        }else{
            nameVal.style.border="3px solid red"  
            error_username.innerHTML="Input Your User Name" 
            return false;
        }  

        if(numberVal.value.match(number)){
            numberVal.style.border="3px solid green"
        }else{
            numberVal.style.border="3px solid red"
            error_phonenumber.innerHTML="Input Your 10 digit Phone Number"
            return false;
        }

        if(passwordVal.value.match(password)){
            passwordVal.style.border="3px solid green"
        }else{
           passwordVal.style.border="3px solid red"
           error_password.innerHTML="Input Your Password"
           return false;
        }

        if (ConfirmVal.value==passwordVal.value) {
            ConfirmVal.style.border="3px solid green"
        }else{
            ConfirmVal.style.border="3px solid red"
            error_confirm.innerHTML="Input a matching Password"
            return false;
        }

        if(emailVal.value.match(email)){
            emailVal.style.border="3px solid green"
        }else{
           emailVal.style.border="3px solid red"
           error_email.innerHTML="Input Your Email"
           return false;
        }
        
        if(passwordVal.value !="" && ConfirmVal.value !="" ){
            isempty=false;
        }else{
            isempty=true;
        }

        if(passwordVal.value==ConfirmVal.value && isempty==false){
            //alert("Succesful SignUp Sir")
            passwordVal.style.border="3px solid green"
            ConfirmVal.style.border="3px solid green"
        }else{
            //alert("The two Passwords must Match")
            passwordVal.style.border="3px solid red"
            ConfirmVal.style.border="3px solid red"
            return false;
        }
    }

let Login=()=>{
    let nameVal=document.getElementById("_name")
    let error_user=document.getElementById("error1")
    let error_password=document.getElementById("error2")
    let passwordVal=document.getElementById("_password")
    
    
    
        //e.preventDefault();
        if(nameVal.value==""){
            error_user.innerHTML="Input Your User Name"
            nameVal.style.border="3px solid red"
            alert("You haven't Inputted your Username.")
            return false;
        }else{
            nameVal.style.border="3px solid green"
            alert("You have inputted Your User Name, Sir") 
        }
        if (passwordVal.value=="") {
            error_password.innerHTML="Input Your Password"
            passwordVal.style.border="3px solid red"
            alert("You haven't Inputted your Password.")
            return false;
        }else {
            passwordVal.style.border="3px solid green"
            alert("You have inputted Your Password, Sir")
        }
}