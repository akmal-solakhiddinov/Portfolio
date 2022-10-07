// Dark mode
const mode = document.querySelector("#night");
const body = document.querySelector("body");
const header = document.querySelector("header");
let initail = document.querySelector(".text-inform");
let anchar = document.getElementsByClassName(".link-tag");


mode.addEventListener("change", () => {
  body.classList.toggle("nightMode");
  header.classList.toggle(".active");
  initail.classList.toggle(".active");

});


document.getElementById("#night").onclick = () => {
  anchar.classList.toggle(".active")
};

document.querySelector("#night").onclick = () => {
};

// Ending of dark mode

let menuBtn = document.querySelector('.global');

document.querySelector('#menuBtn').onclick = () => {
    menuBtn.classList.toggle('.active');
}


/* auto */



/* end///// */


/* 
// fade 
function reveal() {
   var reveals = document.querySelectorAll(".reveal");
 
   for (var i = 0; i < reveals.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = reveals[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
       reveals[i].classList.add("active");
     } else {
       reveals[i].classList.remove("active");
     }
   }
 }
 
 window.addEventListener("scroll", reveal);
//  //////////////////////////////////////////
 */
