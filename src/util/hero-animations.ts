import { iterate, newRandIdx, wait } from "@giveback007/util-lib";
import { getNewDevIcon } from ".";
import { verbs } from "../@data";
import { State } from "../@types";

export async function animTopIcons(round, state: State) {
    if (state.route && state.route !== "/") { return; }
    let time = 300;
    const { icons } = state;

    iterate(icons.length).for(({ x }) => icons[x].anim = false);

    if (round < icons.length) {
        const newName = getNewDevIcon(icons.map(({ name }) => name));
        icons[round] = { name: newName, anim: true };
    } else {
        time = 1500;
        round = -1;
    }

    await wait(time);
    animTopIcons(round + 1, state);
}

function calcTimingForNextLoop(loop: number, time: number) {
    let nextTime: number;

    // Calculate the timing of the next loop
    if (loop > 4) { nextTime = time * 1.75; } else { nextTime = time * 1.2; }

    // Limiter
    return nextTime > 750 ? 750 : nextTime;
}

export async function animVerbWord(prevIdx: number, loop: number, time: number, state: State) {
    if (state.route && state.route !== "/") { return; }
    const n = newRandIdx(prevIdx, verbs.length - 1);

    const { verb } = state;

    verb.str = verbs[n];
    verb.sequence = 0;
    verb.timing = time;

    await wait(time);
    verb.sequence = 1;

    await wait(time);
    verb.sequence = 2;

    await wait(time * 0.5 );

    // Reset loop
    if (loop > 6) {
        loop = 0;
        time = 100;
    }

    loop = loop > 10 ? 0 : loop + 1;
    animVerbWord(n, loop, calcTimingForNextLoop(loop, time), state);
}
