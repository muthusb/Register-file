

const form = document.querySelector('#form');
const username = document.querySelector('#Username');
const Email = document.querySelector('#Email');
const password = document.querySelector('#Password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{

   
   if(!validateInputs()){
    e.preventDefault();
   }

});

function validateInputs(){

    const Usernameval = Username.value.trim();
    const Emailval = Email.value.trim();
    const Passwordval = Password.value.trim();
    const cpasswordval = cpassword.value.trim();
let success = true

    if(Usernameval===''){
        success = false;
        setError(Username,'username is required')
    }
    else{
    setSuccess(Username);
    }


    if(Emailval===''){
        success = false;
        setError(Email,'Email is required')

    }

    if(!validateEmail(Emailval)){
        success = false;
    setError(Email,'Please enter a valid enail')
    }
    
    else{
    setSuccess(Email)
}
if(Passwordval ===''){
    success = false;
    setError(Password,'password is required')

}
if(Passwordval.length<8){
    success = false;
    setError(Password,'password must be atleast 8 character long')
}
else{
    setSuccess(Password)
}

if(cpasswordval!== Passwordval){
setError(cpassword, 'password does not match')
}

else{
    setSuccess(cpassword)
}

return success;
}


function setError(element,message){

    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');


errorElement.innerText = message;
inputGroup.classList.add('error')
inputGroup.classList.remove('success')
}


function setSuccess(element){

    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');


errorElement.innerText = '';
inputGroup.classList.add('success')
inputGroup.classList.remove('error')
}

const validateEmail = (Email) =>{

    return String(Email)
    .toLowerCase()
   .match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}