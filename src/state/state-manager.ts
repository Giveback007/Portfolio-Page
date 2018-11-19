import { viewSize, wait } from "@giveback007/util-lib";
import { State } from "../@types";
import { animTopIcons, animVerbWord } from "../util/hero-animations";

export class StateManager {
    get state() { return this._state; }
    set state(state: State) {
        if (this._state) return;
        this._state = state;

        this.heroAnimate();
        this.onViewSize();

        addEventListener("resize", () => this.onViewSize());
    }

    private viewChanged = false;
    private _state: State;

    public portfolioPage = (page: number) => this.state.portfolio.page = page;

    public updateRoute = (route: string) => {
        console.log(route);
        this.state.route = route;
        this.heroAnimate();
    }

    public heroAnimate() {
        animTopIcons(0, this.state);
        animVerbWord(-1, 0, 100, this.state);
    }

    public async onViewSize() {
        if (this.viewChanged) return;

        this.viewChanged = true;
        await wait(100);

        this.state.viewSize = viewSize();
        this.viewChanged = false;
    }
}
