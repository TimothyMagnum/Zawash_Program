
let Signup=()=>{
    let name=/^[A-Za-z]+$/
    let number=/^[0-9]+$/
    let password=/^[0-9a-zA-Z]+$/
    let email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let nameVal=document.getElementById("UserName")
    let numberVal=document.getElementById("PhoneNumber")
    let passwordVal=document.getElementById("Password")
    let ConfirmVal=document.getElementById("ConfirmPassword")
    let emailVal=document.getElementById("Email")
    let isempty=true;
    if(nameVal.value.match(name)){
        nameVal.style.border="3px solid green"
    }else{
        nameVal.style.border="3px solid red"
    }  
    if(numberVal.value.match(number)&& numberVal.value>=10){
        numberVal.style.border="3px solid green"
    }else{
        numberVal.style.border="3px solid red"
    }
    if(passwordVal.value.match(password)){
        passwordVal.style.border="3px solid green"
    }else{
       passwordVal.style.border="3px solid red"
    }
    if(emailVal.value.match(email)){
        emailVal.style.border="3px solid green"
    }else{
       emailVal.style.border="3px solid red"
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
        }
  }

  let Login=()=>{
    let nameVal=document.getElementById("username")
    let passwordVal=document.getElementById("password")
    if(nameVal.value!=""&&passwordVal.value!=""){
      console.log("Yoo")
    }else{
        alert("You haven't Inputted your Username and Password")
    }
  }


