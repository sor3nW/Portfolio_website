var i = 0;
var txt = "Hello, my name is Soren" 
var speed = 30; /* The speed/duration of the effect in milliseconds */

function typeAnimation() {
  if (i < txt.length) {
    document.getElementById("intro-name-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeAnimation, speed);
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".projects")
  for (var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    } else{
      reveals[i].classList.remove("active");
    }
  }
  
}
window.addEventListener("scroll", reveal);
reveal();