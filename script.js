const passElem = document.querySelector('input[id=pass]')
const confirmPassElem = document.querySelector('input[id=confirm-pass]')
confirmPassElem.addEventListener('blur', validateConfirmPass)

function validateConfirmPass() {
  const password = passElem.value;
  const confirmPass = confirmPassElem.value;
  const errorMessage = document.querySelector('.message')
  const invalid = 'error'
  if (confirmPass === password) {
    passElem.classList.remove(invalid)
    confirmPassElem.classList.remove(invalid)
    errorMessage.textContent = ''
  } else {
    passElem.classList.add(invalid)
    confirmPassElem.classList.add(invalid)
    errorMessage.textContent = '*Passwords do not match'
  }
}

