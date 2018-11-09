import { State } from "../@types";
import { animTopIcons, animVerbWord } from "../util/hero-animations";
import { wait, viewSize } from "@giveback007/util-lib";

export class StateManager {
    get state() { return this._state }
    set state(state: State) {
        if (this._state) return;
        this._state = state;

        this.heroAnimate();
        this.onViewSize();

        addEventListener('resize', () => this.onViewSize());
    }

    private viewChanged = false;
    private _state: State;

    portfolioPage = (page: number) => this.state.portfolio.page = page;

    updateRoute = (route: string) => {
        console.log(route)
        this.state.route = route;
        this.heroAnimate();
    }

    heroAnimate() {
        animTopIcons(0, this.state);
        animVerbWord(-1, 0, 100, this.state);
    }

    async onViewSize() {
        if (this.viewChanged) return;
        
        this.viewChanged = true;
        await wait(100);
        
        this.state.viewSize = viewSize();
        this.viewChanged = false;
    }
}
