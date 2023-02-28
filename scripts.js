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