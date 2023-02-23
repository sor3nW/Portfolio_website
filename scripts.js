var i = 0;
var txt = " I am a Computer Science major at the University of Texas at San Antonio interested in Web development, Data Science, and Computational Mathematics";
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeAnimation() {
  if (i < txt.length) {
    document.getElementById("intro-paragraph").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeAnimation, speed);
  }
}