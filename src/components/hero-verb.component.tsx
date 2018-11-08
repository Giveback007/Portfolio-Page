import React = require("react");
import { AppState } from "../@types";

export const HeroVerb = ({ string, sequence, timing }: AppState['verb']) => (
    <div className='hero_verb'>
        <div>I like to</div>
        <div
            className={`verb verb_animate_${sequence}`}
            style={ { transition: `all ${sequence ? timing : 0}ms ease 0s` } }
        >{string}</div>
    </div>
);