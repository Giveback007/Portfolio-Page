var navIsOn = false;
function toggleNav() {
  navIsOn = !navIsOn;
  var btns = document.querySelectorAll('.nav_btn');
  var hr = document.querySelector('.nav_hr');

  if (navIsOn) {
    btns.forEach(x => x.classList.add('nav_btn-on'));
    hr.classList.add('nav_btn-on');
  } else {
    btns.forEach(x => x.classList.remove('nav_btn-on'));
    hr.classList.remove('nav_btn-on');
  }
}

document.getElementById('nav_toggle').addEventListener("click", toggleNav)
