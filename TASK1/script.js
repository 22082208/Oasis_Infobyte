var isOpened = false;
var funFacts = ["There is the same amount of water on Earth as there was when the Earth was formed."];
function myFunction() {
    var c = document.getElementById("close");
    if (!isOpened) {
        c.style.display = "block";
        isOpened = true;
    } else {
        c.style.display = "none";
        isOpened = false;
    }

}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbardesktop").style.backgroundColor = "#424242";
        document.getElementById("navbar").style.backgroundColor = "#424242";
    } else {
        document.getElementById("navbardesktop").style.backgroundColor = "#3f3e3e";
        document.getElementById("navbar").style.backgroundColor = "#3f3e3e";
    }
}


function callFunctionsHere() {
    loadFunFact();
}


function loadFunFact() {
    var item = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("funfact").innerText = item;
}
