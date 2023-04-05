// variables
let nameInput = document.querySelector('#nameInput');
let emailInput = document.querySelector('#emailInput');
let phoneNumber = document.querySelector('#phoneNumber');
let messageInput = document.querySelector('#messageInput');
let formSubmit = document.querySelector('#formSubmit');

// form vlidation options

// Validation for name input
nameInput.addEventListener('input',checkInput);
nameInput.addEventListener('click',checkInput);

// Validation for email input
emailInput.addEventListener('input',checkInput);
emailInput.addEventListener('click',checkInput);

// Validation for telephone input
phoneNumber.addEventListener('input',checkInput);
phoneNumber.addEventListener('click',checkInput);

// Validation for message input
messageInput.addEventListener('input',checkInput);
messageInput.addEventListener('click',checkInput);

// validatin for submit
formSubmit.addEventListener("submit",sendMessage);

function checkInput(){
    if(this.value.length < 1 ||  (!this.checkValidity()) ){
        this.classList.add('warning-color');
        this.classList.add('warning-text');
        messageActivate(this)
    }
    else if( this.checkValidity() ){
        this.classList.remove('warning-color');
        this.classList.remove('warning-text');
        messageActivate(this)
    }
}

function messageActivate(input){
    if (input.id == "nameInput") {
        if (input.checkValidity()) {
            document.getElementById('warning-message-text-name').classList.remove('show-message');
        }
        else{
            document.getElementById('warning-message-text-name').classList.add('show-message');
        }
    }

    else if (input.id == "emailInput") {
        if (input.checkValidity()) {
            document.getElementById('warning-message-text-email').classList.remove('show-message');
        }
        else{
            document.getElementById('warning-message-text-email').classList.add('show-message');
        }
    }

    else if (input.id == "phoneNumber") {
        if (input.checkValidity()) {
            document.getElementById('warning-message-text-number').classList.remove('show-message');
        }
        else{
            document.getElementById('warning-message-text-number').classList.add('show-message');
        }
    }

    else if (input.id == "messageInput") {
        if (input.checkValidity()) {
            document.getElementById('warning-message-text-message').classList.remove('show-message');
        }
        else{
            document.getElementById('warning-message-text-message').classList.add('show-message');
        }
    }
}

//  function validateForm() {
    
//     if (nameInput.checkValidity() && phoneNumber.checkValidity() && emailInput.checkValidity() && messageInput.checkValidity()) {
//         return true;        
//     }

//  }

 function sendMessage(){

   window.alert("Thanks " + nameInput.value + " for messaging me, I will try to get back to you as sonn as possible");

}