"use strict";

//@prepros-append babel/_portfolio-obj.js
//@prepros-append babel/_hero-icons.js
//@prepros-append babel/_hero.js
//@prepros-append babel/_nav.js
//@prepros-append babel/_form.js
//@prepros-append babel/_portfolio.js

var portf_sites = [];

var portf_items = [
// react.js
{ "name": "React.js",
  "items": [{ "name": "Conways GoL", "img": "game-of-life.png", "site": "game-of-life-react-js", "source": "game-of-life-react-js" }, { "name": "Leaderboard", "img": "camper-leaderboard.png", "site": "Camper-Leaderboard", "source": "Local-Weather" }, { "name": "Recipe Box", "img": "recipe-box.png", "site": "Recipe-Box", "source": "Local-Weather" }, { "name": "Markdown Prev", "img": "markdown-previewer.png", "site": "Markdown-Previewer", "source": "Local-Weather" }]
},
// algorithm
{ "name": "Algorithm Scripting",
  "items": [{ "name": "Min-Max Algo", "img": "min-max.png", "site": "Unbeatable-Tic-Tac-Toe", "source": "Unbeatable-Tic-Tac-Toe" }]
},
// misc
{ "name": "Misc.",
  "items": [{ "name": "JS Calculator", "img": "js-calculator.png", "site": "JS-Calculator", "source": "JS-Calculator" },
  // {"name": "Pomodoro Timer", "img": "pomodoro.png", "site": "Pomodoro", "source": ""},
  { "name": "Simon Game", "img": "simon.png", "site": "Simon-Game", "source": "Simon-Game" }, { "name": "Hero Gallery", "img": "hero-gallery.jpg", "site": "Hero-Gallery", "source": "Hero-Gallery" }]
},
// backend
// { "name": "Node.js",
//   "items": [
//     {"name": "", "img": "", "site": "", "source": ""}
//   ]
// },
{ "name": "JSON api",
  "items": [{ "name": "Twich api", "img": "twitch.png", "site": "Twitch-Status", "source": "Twitch-Status" }, { "name": "Weather api", "img": "weather.png", "site": "Local-Weather", "source": "Local-Weather" }, { "name": "Wiki api", "img": "wiki.png", "site": "Wiki-Viewer", "source": "Wiki-Viewer" }, { "name": "Random Quote", "img": "rand-quote.png", "site": "Random-Quote-Gen", "source": "Random-Quote-Gen" }]
}];

var verbArr = ['work', 'play', 'create', 'make', 'build', 'design', 'forge', 'form', 'invent', 'imagine', 'think', 'develop'];

var devIcons = ['<i class="devicon-atom-original colored"></i>', '<i class="devicon-babel-plain colored"></i>', '<i class="devicon-bootstrap-plain-wordmark colored"></i>', '<i class="devicon-gimp-plain colored"></i>', '<i class="devicon-chrome-plain colored"></i>', '<i class="devicon-firefox-plain colored"></i>', '<i class="devicon-git-plain colored"></i>', '<i class="devicon-github-plain colored"></i>', '<i class="devicon-gulp-plain colored"></i>', '<i class="devicon-ie10-original colored"></i>', '<i class="devicon-jquery-plain colored"></i>', '<i class="devicon-nodejs-plain colored"></i>', '<i class="devicon-php-plain colored"></i>', '<i class="devicon-react-original colored"></i>', '<i class="devicon-safari-plain colored"></i>', '<i class="devicon-sass-original colored"></i>', '<i class="devicon-slack-plain colored"></i>', '<i class="devicon-webpack-plain colored"></i>'];

function animTopIcons(turn) {
  function remove() {
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.remove('anim');
    }
  }

  var icons = document.getElementsByClassName('hero_icon-top');
  var time = 300;
  remove();
  if (turn <= 2) {
    icons[turn].classList.add('anim');
  }
  if (turn > 2) {
    time = 3000;turn = -1;
  }

  setTimeout(function () {
    animTopIcons(turn + 1);
  }, time);
}

animTopIcons(0);

// function iconHSL() {
//   var icons = document.getElementsByClassName('hero_icon-top')
//   var count = 0;
//   var color = 202;
//   setInterval(() => {
//     count++
//     if (count > 2) {count = 0;}
//     icons[count].style.color = `hsl(${color *= 1.015}, 100%, 38%)`;
//   }, 50)
// }
//
// iconHSL();

function animVerbWord(r, loop, time) {
  var nextTime;
  if (loop > 16) {
    nextTime = 50;loop = 0;
  } else if (loop > 4) {
    nextTime = time * 1.25;
  } else {
    nextTime = time * 1.1;
  }

  var word = document.getElementById('hero_verb-word');
  var rand = -1;
  while (rand < 0 || rand === r) {
    rand = Math.floor(Math.random() * verbArr.length);
  }
  word.innerHTML = verbArr[rand];

  word.classList.add('anim0');
  word.style.transition = 'none';

  setTimeout(function () {
    word.classList.remove('anim0');
    word.classList.add('anim1');
    word.style.transition = "all " + time + "ms ease";
  }, time);
  setTimeout(function () {
    word.classList.remove('anim1');
    word.classList.add('anim2');
    word.style.transition = "all " + time + "ms ease";
  }, time * 2);
  setTimeout(function () {
    word.classList.remove('anim2');
    animVerbWord(rand, loop + 1, nextTime);
  }, time * 2.5);
}

animVerbWord(-1, 0, 50);

// function animVerbIcon() {
//   var icon = document.getElementById('hero_verb-icon');
//   icon.style.opacity = 1;
//   setInterval(() => {
//     var rand = Math.floor(Math.random()*devIcons.length);
//     icon.innerHTML = devIcons[rand];
//   }, 2500)
// }
//
// animVerbIcon();

/* Toggle Responsive Nav Start */
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

document.getElementById('nav_toggle').addEventListener("click", toggleNav
/* Toggle Responsive Nav End */

/* Smooth Scroll Start */
);$(document).ready(function () {
  var navHeight = $('nav').outerHeight();
  $('.nav_anchor').click(function (x) {
    var linkHref = $(this).attr('href');
    x.preventDefault();
    if (navIsOn) {
      toggleNav();
    } // - toggle off nav
    $('html, body').delay(150).animate({
      scrollTop: $(linkHref).offset().top - navHeight
    }, 800);
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

// taken from:
// https://github.com/dwyl/html-form-send-email-via-google-script-without-server
function validEmail(email) {
  // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
// get all data in form and return object
function getFormData() {
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements).map(function (k) {
    if (elements[k].name !== undefined) {
      return elements[k].name;
      // special case for Edge's html collection
    } else if (elements[k].length > 0) {
      return elements[k].item(0).name;
    }
  }).filter(function (item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function (k) {
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
    // it to be appended to for each item in the loop
    if (elements[k].type === "checkbox") {
      // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append
      // the current checked value to
      // the end of it, along with
      // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space
      // from the  string to make the output
      // prettier in the spreadsheet
    } else if (elements[k].length) {
      for (var i = 0; i < elements[k].length; i++) {
        if (elements[k].item(i).checked) {
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  // console.log(data);
  return data;
}

function handleFormSubmit(event) {
  // handles form submit withtout any jquery
  event.preventDefault(); // we are submitting via xhr below
  var data = getFormData(); // get the values submitted in the form
  if (!validEmail(data.email)) {
    // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action; //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      // console.log( xhr.status, xhr.statusText )
      // console.log(xhr.responseText);
      document.getElementById('gform').style.display = 'none'; // hide form
      document.getElementById('form_aside').style.display = 'none'; // hide aside
      document.getElementById('thankyou_message').style.display = 'block';
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
}
function loaded() {
  // console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);

function Sites(props) {
  return React.createElement(
    "section",
    { className: "portf_site-wrap" },
    React.createElement(
      "div",
      { className: "portf_site" },
      React.createElement(
        "h4",
        null,
        "GitHub"
      ),
      React.createElement(
        "div",
        { className: "base_btn portf_site-btn" },
        React.createElement(
          "a",
          { href: "https://github.com/Giveback007", target: "_blank" },
          React.createElement(
            "button",
            null,
            React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
          )
        )
      ),
      React.createElement(
        "h5",
        null,
        "I am active on Github"
      )
    ),
    React.createElement(
      "div",
      { className: "portf_site" },
      React.createElement(
        "h4",
        null,
        "Codepen"
      ),
      React.createElement(
        "div",
        { className: "base_btn portf_site-btn" },
        React.createElement(
          "a",
          { href: "https://codepen.io/giveback007/", target: "_blank" },
          React.createElement(
            "button",
            null,
            React.createElement("i", { className: "fa fa-codepen", "aria-hidden": "true" })
          )
        )
      ),
      React.createElement(
        "h5",
        null,
        "I also post on Codepen"
      )
    ),
    React.createElement(
      "div",
      { className: "portf_site" },
      React.createElement(
        "h4",
        null,
        "freeCodeCamp"
      ),
      React.createElement(
        "div",
        { className: "base_btn portf_site-btn" },
        React.createElement(
          "a",
          { href: "https://www.freecodecamp.org/giveback007", target: "_blank" },
          React.createElement(
            "button",
            null,
            React.createElement("i", { className: "fa fa-free-code-camp", "aria-hidden": "true" })
          )
        )
      ),
      React.createElement(
        "h5",
        null,
        "View my certificates"
      )
    )
  );
}
////////////////////////////////////////////////
function Main(props) {
  var mapedSections = props.items.map(function (x) {
    return React.createElement(Section, { obj: x });
  });
  return React.createElement(
    "div",
    { className: "portf_innerWrap" },
    React.createElement(
      "h2",
      null,
      "Portfolio"
    ),
    React.createElement(Sites, null),
    mapedSections
  );
}

function Section(props) {
  var mapedItems = props.obj.items.map(function (x) {
    return React.createElement(Item, { item: x });
  });
  return React.createElement(
    "section",
    { id: "react", className: "portf_section" },
    React.createElement(
      "h3",
      null,
      props.obj.name
    ),
    React.createElement(
      "div",
      { className: "portf_code-line" },
      React.createElement("i", { className: "fa fa-chevron-down", "aria-hidden": "true" })
    ),
    React.createElement(
      "div",
      { className: "portf_item-wrap" },
      mapedItems
    )
  );
}

function Item(props) {

  function itemImg(img) {
    if (img === "") {
      return 'assets/imgs/portfolio/under_construction.jpg';
    }
    if (img.slice(0, 4) === 'http') {
      return img;
    }
    return "assets/imgs/portfolio/" + img;
  }

  function itemSite(link) {
    var x;
    if (link.slice(0, 4) === 'http') {
      x = link;
    } else if (link === "") {
      return null;
    } else {
      x = "https://giveback007.github.io/" + link;
    }
    return React.createElement(
      "a",
      { href: x, target: "_blank", className: "portf_item-link" },
      React.createElement("i", { className: "fa fa-eye", "aria-hidden": "true" }),
      React.createElement(
        "p",
        null,
        "view site"
      )
    );
  }

  function itemSource(src) {
    var x;
    if (src.slice(0, 4) === 'http') {
      x = src;
    } else if (src === "") {
      return null;
    } else {
      x = "https://github.com/Giveback007/" + src;
    }
    return React.createElement(
      "a",
      { href: x, target: "_blank", className: "portf_item-link" },
      React.createElement("i", { className: "fa fa-code", "aria-hidden": "true" }),
      React.createElement(
        "p",
        null,
        "source code"
      )
    );
  }

  return React.createElement(
    "div",
    { style: { backgroundImage: "url(" + itemImg(props.item.img) + ")" }, className: "portf_item" },
    props.item.name === '' ? null : React.createElement(
      "h4",
      { className: "portf_item-title" },
      React.createElement(
        "span",
        null,
        props.item.name
      )
    ),
    itemSite(props.item.site),
    itemSource(props.item.source)
  );
}

ReactDOM.render(React.createElement(Main, { items: portf_items }), document.getElementById('portf'));