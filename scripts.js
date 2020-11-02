/* Add your JavaScript to this file */
window.onload = function(){
    a = document.getElementsByTagName("form")[0];
    var msg = document.getElementsByClassName("message")[0];
    var isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

    a.addEventListener("submit", function(e){
    e.preventDefault();
    msg.innerHTML = "";
    let email = document.getElementById("email");
    if (isEmail.test(email.value)){
        msg.innerHTML = "Thank you! Your email address " + email.value + " has been added to our mailing list!";
    }
    else {
        msg.innerHTML = "Please enter a valid email address.";
        }
    })
        
}