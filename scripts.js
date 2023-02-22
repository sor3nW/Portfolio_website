var i = 0;
var txt = " I am a Computer Science major at the University of Texas at San Antonio interested in web development, data science, and computational mathematics";
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}