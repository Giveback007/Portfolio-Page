import React = require("react");
import { AppState } from "../@types";
import { DevIcons } from "./dev-icons.component";

type HeroProps = { icons: AppState['icons']; verb: string };
export const Hero = ({ icons, verb }: HeroProps) => (
    <div className="page hero">
        <section className='hero_center'>
            <DevIcons icons={icons}/>

            <h1>Hi, I'm Dave</h1>
            <h3>Software Developer</h3>

            <div className='hero_verb'>
                <div>I like to</div>
                <div id='hero_verb-word'>{verb}</div>
            </div>
        </section>

        <a href='#about' className='hero_arrow-down nav_anchor'>
        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        </a>
    </div>
);
