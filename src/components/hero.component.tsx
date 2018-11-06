import React = require("react");
import { hot } from "react-hot-loader";

export const Hero = () =>(
    <div className="page hero">
        <section className='hero_center'>
            <div className='hero_icon-top-wrap'>
                <div className='hero_icon-top'><i className="devicon-html5-plain-wordmark"></i></div>
                <div className='hero_icon-top'><i className="devicon-css3-plain-wordmark"></i></div>
                <div className='hero_icon-top'><i className='devicon-javascript-plain'></i></div>
            </div>

            <h1>Hi, I'm Dave</h1>

            <h3>Front End Developer</h3>

            <div className='hero_verb'>
                <div>I like to</div>
                <div id='hero_verb-word'></div>
            </div>
        </section>

        <a href='#about' className='hero_arrow-down nav_anchor'>
        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        </a>
    </div>
);
