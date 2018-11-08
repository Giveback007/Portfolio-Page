import React = require("react");
import { State } from "../@types";
import { connect } from "@giveback007/mutable-react-state";

export const HeroDevIcons = connect((s: State) => s)(({ icons }) => {
    const iconElms = icons.map(({ name, anim }, i) => 
        <div key={i} className={`icon${anim ? ' icon_animate' : ''}`}>
            <i  className={`devicon-${name}`}></i>
        </div>
    )

    return <div className='hero_icons'>{iconElms}</div>;
});
