import { devIcons } from "../data";
import { rand, typeOf } from "@giveback007/util-lib";

export function getNewDevIcon(currentIcons: string[]) {
    let n = -1;
    while (n < 0 || currentIcons.includes(devIcons[n]))
        n = rand(0, devIcons.length - 1);
    
    return devIcons[n];
}

export function genNewRandIdx(prev: number | number[], maxIdx: number) {
    let num = -1;

    do {
        num = rand(0, maxIdx);
    } while (
        typeOf(prev, 'number') ?
            prev === num :
            prev.find((match) => num === match)
    );
    
    return num;
}
