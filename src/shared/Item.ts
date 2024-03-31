export class Items{
    constructor(public val : string, public isComplete : boolean = false) {
        this.val = val;
        this.isComplete = isComplete;
    }
}