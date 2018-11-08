import React = require("react");
import { App } from "./components/app.component";
import { initStateAndRender } from '@giveback007/mutable-react-state';
import "./index.scss";
import { initState } from "./store/store";
import { animTopIcons, animVerbWord } from "./util/hero-animations";
// import { appState, stateObserver, animTopIcons, animVerbWord } from "./store/index";

// For Quokka.js //
if (!document.getElementById('app-root'))
    document.body.innerHTML += '<div id="app-root"></div>';

// Here I am experimenting with my own state management tool
const store = initStateAndRender(<App />, document.getElementById('root'), initState);

animTopIcons(0, store.state);
animVerbWord(-1, 0, 100, store.state);
