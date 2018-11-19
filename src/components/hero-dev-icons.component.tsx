import { connect } from "@giveback007/mutable-react-state";
import React = require("react");
import { Icon, State } from "../@types";

const Icon = ({ name, anim }: Icon) => (
    <div className={`icon${anim ? " icon_animate" : ""}`}>
        <i  className={`devicon-${name}`}/>
    </div>
);

export const HeroDevIcons = connect((s: State) => s)(
({ icons }) => (
    <div className="hero_icons">
        {icons.map((icon, i) => <Icon key={i} {...icon}/>)}
    </div>
));
