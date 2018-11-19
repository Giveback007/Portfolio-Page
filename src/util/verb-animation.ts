import { newRandIdx, wait } from "@giveback007/util-lib";
import { verbs } from "../@data";

function calcTimingForNextLoop(loop: number, time: number) {
    let nextTime: number;

    // Calculate the timing of the next loop
    if (loop > 10) {
        // Reset loop on 11
        nextTime = 100;
        loop = 0;
    } else if (loop > 4) {
        // Decelerate on loop 5 to 10
        nextTime = time * 1.75;
        if (nextTime < 500) { nextTime = 500; }
    } else {
        // Decelerate on loop 1 to 4
        nextTime = time * 1.2;
    }

    // Limiter 750 is slowest
    return nextTime > 750 ? 750 : nextTime;
}

function animVerbWord(prevIdx, loop, time) {
    const word = document.getElementById("hero_verb-word");
    const n = newRandIdx(prevIdx, verbs.length - 1);
    word.innerHTML = verbs[n];

    word.classList.add("anim0");
    word.style.transition = "none";

    wait(time).then(() => {
        word.classList.remove("anim0");
        word.classList.add("anim1");
        word.style.transition = `all ${time}ms ease`;
    });

    wait(time * 2).then(() => {
        word.classList.remove("anim1");
        word.classList.add("anim2");
        word.style.transition = `all ${time}ms ease`;
    });

    wait(time * 2.5).then(() => {
        word.classList.remove("anim2");
        animVerbWord(n, loop + 1, calcTimingForNextLoop(loop, time));
    });
}
