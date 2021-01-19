let inputs = document.querySelectorAll('.form--field');
let formBtn = document.querySelector('.form__button');


formBtn.addEventListener('click', function(e){
  for(let i = 0; i < inputs.length; i++) {
    let currentInput = inputs[i];
    let inputParent = currentInput.parentNode;

    if(!inputs[i].validity.valid) {

      inputParent.classList.add('error');
      e.preventDefault();
    } else {
      inputParent.classList.remove('error');
    }
  };
});
