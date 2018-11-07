import { initAppState } from "@giveback007/proxy-state";
import { iterate, rand } from "@giveback007/util-lib";
import { getNewDevIcon } from "../util";
import { verbs } from "../data";

export const initState = (() => {
    const iconsNames: string[] = [];
    iterate(5).for(() => iconsNames.push(getNewDevIcon(iconsNames)));
    
    const icons = iconsNames.map((name) => ({ name, anim: false }));
    const verb = { str: verbs[rand(0, verbs.length - 1)], class: '', styles: '' };
    return { icons, verb };
})();

// Here I am experimenting with my own state management tool
export const stateObserver = initAppState(initState);
export const appState = stateObserver.state;
