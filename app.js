let formFields = document.querySelectorAll('.form--field');
let formBtn = document.querySelector('.form__button');


formBtn.addEventListener('click', function(e){
  for(let i = 0; i < formFields.length; i++) {
    let currentInput = formFields[i];
    let inputParent = currentInput.parentNode;

    // If input is invald and is NOT the email field, add error class and remove placeholder
    if((!currentInput.validity.valid) && (currentInput.getAttribute('id') !== 'email')) {

      inputParent.classList.add('error');
      currentInput.removeAttribute('placeholder');
      e.preventDefault();
    
      // If input is invalid and it IS the email field, add error class and change placeholder value
    } else if ((!currentInput.validity.valid) && (currentInput.getAttribute('id') === 'email')) {
      inputParent.classList.add('error');
      currentInput.placeholder = `email@example.com`;
      e.preventDefault();
    
    } else {
      inputParent.classList.remove('error');
    }
  };
});
