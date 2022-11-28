export class Joke {
    public setup: string;
    public punchLine: string;
    public hide: boolean;

    constructor(
        setup: string,
        punchLine: string
    ) {
        this.setup = setup;
        this.punchLine = punchLine;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }

    toggleTellMe() {
        if (this.hide) {
            return 'Tell Me';
        }
        return 'Hide Answer';
    }
}