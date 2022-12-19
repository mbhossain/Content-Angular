export class TodoInterface {
    id: string;
    text: string;
    isCompleted: true

    constructor(options: any = {}) {
        this.id = options.id || '';
        this.text = options.text || '';
        this.isCompleted = options.isCompleted || false;
    }

}