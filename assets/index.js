'use strict';

//@prepros-append babel/_nav.js

var navIsOn = false;
function toggleNav() {
  navIsOn = !navIsOn;
  var btns = document.querySelectorAll('.nav_btn');
  var hr = document.querySelector('.nav_hr');

  if (navIsOn) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.add('nav_btn-on');
    }
    hr.classList.add('nav_btn-on');
  } else {
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove('nav_btn-on');
    }
    hr.classList.remove('nav_btn-on');
  }
}

document.getElementById('nav_toggle').addEventListener("click", toggleNav);