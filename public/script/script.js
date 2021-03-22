function showRegister() {

    document.getElementById("login").style.display= "none";
    document.getElementById("title").innerHTML = "Register"
    document.getElementById("register").setAttribute("style", "animation: transitionIn 4s; display: block;");
  }
  function showlogin() {
  
      document.getElementById("register").style.display = "none";
      document.getElementById("title").innerHTML = "Login"
      document.getElementById("login").setAttribute("style", "animation: transitionIn 4s; display: block;");
      
    }