import { StateManager } from "./state-manager";

export const appState = new StateManager;

export const {
    portfolioPage,
    updateRoute
} = appState;
