function animTopIcons(turn) {
  function remove() {
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.remove('anim');
    }
  }

  var icons = document.getElementsByClassName('hero_icon-top');
  var time = 300;
  remove()
  if (turn <= 2) {icons[turn].classList.add('anim');}
  if (turn > 2) {time = 3000; turn = -1}

  setTimeout( () => {
    animTopIcons(turn + 1)
  }, time);

}

animTopIcons(0);

function animVerbWord(r, loop, time) {
  var nextTime;
  if (loop > 17) {nextTime = 50; loop = 0}
  else if (loop > 4) {nextTime = time * 1.25}
  else {nextTime = time * 1.1}

  var word = document.getElementById('hero_verb-word');
  var rand = -1;
  while (rand < 0 || rand === r) {
    rand = Math.floor(Math.random()*verbArr.length)
  }
  word.innerHTML = verbArr[rand];

  word.classList.add('anim0');
  word.style.transition = 'none'

  setTimeout(() => {
    word.classList.remove('anim0')
    word.classList.add('anim1');
    word.style.transition = `all ${time}ms ease`
  }, time);
  setTimeout(() => {
    word.classList.remove('anim1');
    word.classList.add('anim2');
    word.style.transition = `all ${time}ms ease`
  }, time*2);
  setTimeout(() => {
    word.classList.remove('anim2');
    console.log(nextTime)
    animVerbWord(rand, loop + 1, nextTime);
  }, (time*2.5));

}

animVerbWord(-1, 0, 50);

function animVerbIcon() {
  var icon = document.getElementById('hero_verb-icon');
  var rand = Math.floor(Math.random()*devIcons.length);
  icon.innerHTML = devIcons[rand];
  icon.style.opacity = 0;
}

animVerbIcon();
