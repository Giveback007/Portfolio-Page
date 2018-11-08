import React = require("react");
import ReactDOM = require("react-dom");
import { App } from "./components/app.component";
import "./index.scss";
import { appState, stateObserver, animTopIcons, animVerbWord } from "./store/index";

// For Quokka.js //
if (!document.getElementById('app-root'))
    document.body.innerHTML += '<div id="app-root"></div>';

class RenderApp extends React.Component {
    state = appState;
    
    componentDidMount() {
        stateObserver.sub((state) => this.setState(state));

        animTopIcons(0, appState);
        animVerbWord(-1, 0, 100, appState);
    }
    
    render = () => <App { ...this.state }/>;
}

ReactDOM.render(<RenderApp />, document.getElementById('root'));
