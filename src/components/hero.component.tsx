import React = require("react");
import { HeroDevIcons } from "./hero-dev-icons.component";
import { HeroVerb } from "./hero-verb.component";

export const Hero = () => (
    <div className="hero_page page center_parent">
        <section className='hero_content center'>
            <HeroDevIcons />

            <h1>Hi, I'm Dave</h1>
            <h3>Software Developer</h3>

            <HeroVerb />
        </section>

        <a href='#about' className='hero_arrow-down nav_anchor'>
        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        </a>
    </div>
);
