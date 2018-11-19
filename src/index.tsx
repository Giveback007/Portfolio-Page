// DELETE
console.clear();

import { initStateAndRender } from "@giveback007/mutable-react-state";
import { iterate, viewSize } from "@giveback007/util-lib";
import React = require("react");
import { devIcons, verbs } from "./@data";
import { projects } from "./@data/portfolio";
import { State } from "./@types";
import { App } from "./components/app.component";
import "./index.scss";
import { appState } from "./state";

projects.map(({ image }) => require(`./assets/portfolio/${image}`));

// Here I am experimenting with my own state management tool
const initState: State = {
    icons: iterate(5).map(({ x }) => ({ name: devIcons[x], anim: false })),
    portfolio: { data: projects, page: 0 },
    route: null,
    verb: { str: verbs[0], timing: 0, sequence: 0 },
    viewSize: viewSize(),
};

appState.state = initStateAndRender(<App />, document.getElementById("root"), initState).state;
