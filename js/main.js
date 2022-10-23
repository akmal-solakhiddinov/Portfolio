// Dark mode
const mode = document.querySelector("#night");
const body = document.querySelector("body");
const header = document.querySelector("header");
let initail = document.querySelector(".text-inform");

mode.addEventListener("change", () => {
  body.classList.toggle("nightMode");
  header.classList.toggle(".active");
  initail.classList.toggle(".active");
});




// Ending of dark mode

let menuBTN = document.querySelector('.global');

document.querySelector('#menuBtn').onclick = () => {
    menuBTN.classList.toggle('.toggle');
    // readMore.classList.remove('.active');
    
  }
  /* auto */
  
  /* end///// */
  window.onscroll = () => {
    menuBTN.classList.remove('.toggle');
  }
  






























/* 
{
  let likes = 0;
  $(document).ready(function () {
    // ajax to get current likes
    // let likes from server are 10
    // assign the current likes to variable
    likes = 10;
    setLikes(likes);
  });
  
  $("body").on("click", ".likeBtn", function () {
    // ajax to post a current likes
    // in success add increment to likes
    likes++;
    setLikes(likes);
  });

  function setLikes(count) {
    $(".totalLikes").text(count);
  }
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Likes Counter</title>
</head>
<body>
<button class="likeBtn">
  Like (<span class="totalLikes">0</span>)
</button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</body>
</html>
}



 */













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

// Counter //////////////////////////////////
function trimTrailingSlash(string) {
  if (string != null) {
    return string.replace(/\/+$/, "");
  } else {
    return string;
  }
}
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  };
}
ctrHref = trimTrailingSlash("https://bachelorthesiswritingservice.com/".trim());
ctrHref2 = trimTrailingSlash(
  "https://bachelorthesiswritingservice.com/".trim()
);
eInDoc = function (e) {
  while ((e = e.parentNode)) {
    if (e == document) {
      return true;
    }
  }
  return false;
};
lCheck = function (l) {
  if (
    null != l &&
    null != l.getAttribute("href") &&
    (ctrHref === "" ||
      trimTrailingSlash(l.getAttribute("href").trim()) == ctrHref ||
      trimTrailingSlash(l.href.trim()) == ctrHref ||
      trimTrailingSlash(l.getAttribute("href").trim()) == ctrHref2 ||
      trimTrailingSlash(l.href.trim()) == ctrHref2)
  ) {
    return true;
  } else {
    return false;
  }
};
// /////////////////////////////////////////

