import React = require("react");
import { AppState } from "../@types";

type DevIconsProps = { icons: AppState['icons'] };
export function DevIcons({ icons }: DevIconsProps) {
    const iconElms = icons.map(({ name, anim }, i) => 
        <div key={i} className={`icon${anim ? ' icon_animate' : ''}`}>
            <i  className={`devicon-${name}`}></i>
        </div>
    );

    return <div className='hero_icons'>{iconElms}</div>;
} 