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
  checkEmail =(input)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
        showError(input,`Email is not valid`);
    }
  }
  
  //IT willcheck for required 
  var checkRequired = (inputArr)=>{
    inputArr.forEach(input=>{
      if(input.value.trim() ===''){
         showError(input,`${getFieldName(input)} is required.`);
      }else{
          showSuccess(input);
      }
    });
  }

  // check password match 
  checkPasswordsmatch = (input1,input2)=>{
      if(input1.value !== input2.value ){
        showError(input2,`Entered passwords dont match`);
      }
  }



 //It will return capitalised input field id.
  var getFieldName = (input) => {  return input.id.charAt(0).toUpperCase()+input.id.slice(1) }
     
  //check input length

   checkLength = (input,min,max) =>{
     if(input.value.length < min){
       showError(input, `${getFieldName(input)} Must be Alteast ${min} Characters`);
     } else if (input.value.length > max){
      showError(input, `${getFieldName(input)} Must be within ${max} Characters`);
     }else {
       showSuccess(input);
     }
   };



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsmatch(password,password2);
});