/* Toggle Responsive Nav Start */
var navIsOn = false;
function toggleNav() {
  navIsOn = !navIsOn;
  var btns = document.querySelectorAll('.nav_btn');
  var hr = document.querySelector('.nav_hr');

  if (navIsOn) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.add('nav_btn-on')
    }
    hr.classList.add('nav_btn-on');
  } else {
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove('nav_btn-on')
    }
    hr.classList.remove('nav_btn-on');
  }
}

document.getElementById('nav_toggle').addEventListener("click", toggleNav)
/* Toggle Responsive Nav End */

/* Smooth Scroll Start */
$(document).ready(function() {
  var navHeight = $('nav').outerHeight();
 $('.nav_anchor').click(function(x) {
    var linkHref = $(this).attr('href');
    x.preventDefault();
    $('html, body').delay(150).animate({
     scrollTop: $(linkHref).offset().top - navHeight
    }, 1200);
 });
});
/* Smooth Scroll End */

/* Nav Sticky Start */
$(function () {
  $(document).on('scroll', function () {
    if ($(window).scrollTop() >= $("#hero").height()) {
      $("#nav").addClass("nav_fixed-on");
      $("#nav_ghost").addClass("nav_ghost");
    }
    if ($(window).scrollTop() < $("#hero").height()) {
      $("#nav").removeClass("nav_fixed-on");
     $("#nav_ghost").removeClass("nav_ghost");
    }
  });
});
/* Nav Sticky End */
