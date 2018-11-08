
import { iterate, rand } from "@giveback007/util-lib";
import { getNewDevIcon } from "../util";
import { verbs } from "../data";

export const initState = (() => {
    const iconsNames: string[] = [];
    iterate(5).for(() => iconsNames.push(getNewDevIcon(iconsNames)));
    
    const icons = iconsNames.map((name) => ({ name, anim: false }));
    const verb = { string: verbs[rand(0, verbs.length - 1)], timing: 0, sequence: 0 };
    return { icons, verb };
})();
