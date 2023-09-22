
function verify() {
    let email = document.getElementById("email-form").value;
    let password = document.getElementById("password-form").value;
    let confirm = document.getElementById("confirm-password-form").value;

    let email_stat = document.getElementById("email_error");
    let pass_stat = document.getElementById("pass_error");
    let confirm_stat = document.getElementById("confirm_error");

    if (email == "") {
        email_stat.innerHTML = "Please enter your email.";
        email_stat.style.color = 'red';
        email_stat.style.marginTop = '0rem';
    }
    else{
        email_stat.innerHTML = "";
    }


    if (password == "") {
        pass_stat.innerHTML = "Please enter your password.";
        pass_stat.style.color = 'red';
        pass_stat.style.marginTop = '0rem';
    }
    else {
        pass_stat.innerHTML = "";
    }

    
    if (confirm == "") {
        confirm_stat.innerHTML = "Please confirm your password.";
        confirm_stat.style.color = 'red';
        confirm_stat.style.marginTop = '0rem';
    }
    else if (confirm != password){
        confirm_stat.innerHTML = "Your password doesn't match.";
        confirm_stat.style.color = 'red';
        confirm_stat.style.marginTop = '0rem';
    }
    else{
        confirm_stat.innerHTML = "";
    }
    
}