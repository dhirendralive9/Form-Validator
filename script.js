const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
var showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }
  
  // Show success outline
var showSuccess =  (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
  
  // Check email is valid
  var checkEmail =(input)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }
  
  
  var checkRequired = (inputArr)=>{
    inputArr.forEach(input=>{
      if(input.value.trim() ===''){
         showError(input,`${getFieldName(input)} is required.`);
      }else{
          showSuccess(input);
      }
    });
  }

  var getFieldName = (input) => {  return input.id.charAt(0).toUpperCase()+input.id.slice(1) }
     
  



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkRequired([username,email,password,password2]);
});