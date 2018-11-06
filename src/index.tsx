// TODO: in dev only
console.clear();
import React = require("react");
import ReactDOM = require("react-dom");
import { App } from "./components/app.component";
import "./index.scss";

// For Quokka.js //
if (!document.getElementById('app-root'))
    document.body.innerHTML += '<div id="app-root"></div>';

ReactDOM.render(<App />, document.getElementById('root'));
