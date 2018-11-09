import { devIcons } from "../@data";
import { rand } from "@giveback007/util-lib";

export function getNewDevIcon(currentIcons: string[]) {
    let n = -1;
    while (n < 0 || currentIcons.includes(devIcons[n]))
        n = rand(0, devIcons.length - 1);
    
    return devIcons[n];
}
