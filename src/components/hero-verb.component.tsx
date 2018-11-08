import React = require("react");
import { State } from "../@types";
import { connect } from "@giveback007/mutable-react-state";

export const HeroVerb = connect((s: State) => s.verb)(({ string, sequence, timing }) => (
    <div className='hero_verb'>
        <div>I like to</div>
        <div
            className={`verb verb_animate_${sequence}`}
            style={ { transition: `all ${sequence ? timing : 0}ms ease 0s` } }
        >{string}</div>
    </div>
));
