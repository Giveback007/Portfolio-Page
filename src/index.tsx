// DELETE
console.clear();

import React = require("react");
import "./index.scss";
import { App } from "./components/app.component";
import { appState } from "./state";
import { devIcons, verbs } from "./@data";
import { initStateAndRender } from '@giveback007/mutable-react-state';
import { iterate, viewSize } from "@giveback007/util-lib";
import { projects } from "./@data/portfolio";
import { State } from "./@types";

projects.map(({ image }) => require(`./assets/portfolio/${image}`));

// Here I am experimenting with my own state management tool
const initState: State = {
    icons: iterate(5).map((i) => ({ name: devIcons[i], anim: false })),
    verb: { string: verbs[0], timing: 0, sequence: 0 },
    portfolio: { data: projects, page: 0 },
    viewSize: viewSize(),
    route: null
};

appState.state = initStateAndRender(<App />, document.getElementById('root'), initState).state;
