export type Project = {
    name: string;
    image: string;
    liveUrl: string;
    srcUrl: string;
}

export type Icon = {
    name: string;
    anim: boolean;
}

export type Verb = {
    string: string;
    timing: number;
    sequence: number;
}

export type State = {
    portfolio: {
        page: number;
        data: Project[]
    };
    route: string;
    icons: Icon[];
    verb: Verb;
    viewSize: { height: number, width: number }
};
