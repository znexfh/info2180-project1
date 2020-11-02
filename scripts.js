/* Add your JavaScript to this file */
window.onload = function(){
    var submit =document.getElementsByTagName("button")
    var msg = document.getElementsByClassName("message")
    var isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    submit.addEventListener("click",function(e){

        var email = document.getElementById("email").value
        if(email == null || !(isEmail.test(email))){
            msg.innerHTML = "Please enter a valid email address."
        } else {
            msg.innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list!"
        }
       if( e.preventDefault){e.preventDefault()}else{e.returnValue=false}
    })
        
}

