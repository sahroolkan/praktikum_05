function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "sahrul" && password == "sahrul2212") {
        alert("Login successfully");
        window.location.href = 'loginsukses.html';
    } 
    else {
        alert("Username dan password salah");
    }
    return false;
}
