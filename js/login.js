document.getElementById('login-submit').addEventListener('click',function(){
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'jihad@gmail.com' && userPassword == 'jihad'){
        window.location.href = 'banking.html';
    }
})


