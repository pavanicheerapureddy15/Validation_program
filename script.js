document.addEventListener('DOMContentLoaded',() => {
    //Connecting html variables to javascript
    const form = document.getElementById('myForm');

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('username');

    //connecting span id with javascript to handle error
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');
    const usernameFeedback = document.getElementById('usernameFeedback');
    
    //validation of email

    email.addEventListener('input', () => {
        if (email.validity.valid) {
            emailFeedback.textContent = 'Valid email!';
            emailFeedback.className = 'valid';
        } else {
            emailFeedback.textContent = 'Please enter a valid email address.';
            emailFeedback.className = 'error';
        }
    });
    

    //validation of password
    password.addEventListener('input', () =>{
        if (password.value.length >= 8) {
            passwordFeedback.textContent = 'Password is strong!';
            passwordFeedback.className = 'valid';
        }else {
            passwordFeedback.textContent = 'Password must be at least 8 characters long';
            passwardFeedback.className = 'error';
        }
    });

    //validation of username
    username.addEventListener('input', ()=>{
        if(username.value.length>=3){
            usernameFeedback.textContent='Username looks good!'
            usernameFeedback.className = 'valid';
        }else {
            usernameFeedback.textContent = 'Please enter 3 characters';
            usernameFeedback.className = 'error';
        }
    });

    form.addEventListener('submit', (event) => {
        if (!email.validity.valid || password.value.length <= 8 || useername.value.length <= 3){
            event.preventDefault();
            alert('Please fill out the form correctly before submitting')
        }
    });
});