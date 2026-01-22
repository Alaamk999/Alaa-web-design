
var themeType = "light";

document.getElementById("theme").onclick = function() {
    if (themeType === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.setProperty("color", "white", "important");
        document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('Images/carbon.jpg')";
        
        document.getElementById("theme").innerText = "Change To Light Mode";
        themeType = "dark";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.setProperty("color", "black", "important");
        document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('Images/carbon.jpg')";
        document.getElementById("theme").innerText = "Change To Dark Mode";
        themeType = "light";
    }
};