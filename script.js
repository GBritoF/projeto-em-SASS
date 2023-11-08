const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const email = document.querySelector('#email');

function validaEmail() {
    if(emailRegex.test(email.value)) {
        console.log('valido')
    } else {
        console.log('Invalido')
    }
}

email.addEventListener('blur', validaEmail)