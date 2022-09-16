// Dark mode 
const mode = document.querySelector('#night');
const body = document.querySelector('body');
// const elemnt1 = document.querySelector('header');
// const elemnt2 = document.querySelector('a');
// const elemnt3 = document.querySelector('.text-inform');

mode.addEventListener('change',()=>{
    body.classList.toggle('nightMode');
    // elemnt1.classList.toggle('.active');
    // elemnt2.classList.toggle('.active');
    // elemnt3.classList.toggle('.active');
});

const elements =document.querySelector('header, a, .text-inform');
  document.querySelector('#night').onclick= () =>{
    elements.classList.toggle('.active');
  }




// Ending of dark mode 

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