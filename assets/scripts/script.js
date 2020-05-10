//Shadow navbar
var topNav = document.getElementById('topnav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
        topNav.classList.add("nav-shadow");
        topNav.classList.remove("nav-white");
    } 
    else {
        topNav.classList.add("nav-white");
        topNav.classList.remove("nav-shadow");
    }
};

// Carousel hero image
let liEls = document.querySelectorAll('ul li');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), liEls.length-1);
  liEls[index].scrollIntoView({behavior: 'smooth'});
}