function validateForm(){
    const inputEmail = document.getElementById('E-mail')
    const inputError = document.getElementById('email-error')
    if( inputEmail.value ===''){
        inputError.textContent = 'le champ ne doit pas étre vide'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize = '20px'
    }
    else if(inputEmail.value.length <6){
            inputError.textContent = 'le nombre de carctère doit étre superieur a 6'
            inputError.style.textAlign = 'center'
            inputError.style.color = 'red'
            inputError.style.fontSize =  '20px'
    }
    else{
        inputError.textContent = ''
       
    }
      inputEmail.addEventListener('input', () => {
            inputError.style.display = inputEmail.value === '' ? 'block':'nome';
      });
      inputEmail.addEventListener('blur', ()=> {
            inputError.style.display = inputEmail.value === '' ? 'block':'nome';
      });

        const textMessage = document.getElementById('message')
        const textError = document.getElementById('message-error')
        if( textMessage.value ===''){
            textError.textContent = 'le champ ne doit pas étre vide'
            textError.style.textAlign = 'center'
            textError.style.color = 'red'
            textError.style.fontSize = '20px'

            alert('votre messge a été envoyer par succès')
        }
        else{
            textError.textContent ='input'
        }
        textMessage.addEventListener('input', () => {
            inputError.style.display = textMessage.value === '' ? 'block':'nome';
      });
      textMessage.addEventListener('blur', ()=> {
        inputError.style.display = textMessage.value === '' ? 'block':'nome';
  });
  

    return false
}