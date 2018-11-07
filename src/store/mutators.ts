import { AppState } from "../@types";
import { iterate, wait } from "@giveback007/util-lib";
import { getNewDevIcon } from "../util";

export async function animTopIcons(round, state: AppState) {
    let time = 300;
    const { icons } = state;
    
    iterate(icons.length).for((i) => icons[i].anim = false);

    if (round < icons.length) {
        const name = getNewDevIcon(icons.map(({ name }) => name))
        icons[round] = { name, anim: true };
    } else {
        time = 2000;
        round = -1;
    }
    
    await wait(time);
    animTopIcons(round + 1, state);
}

