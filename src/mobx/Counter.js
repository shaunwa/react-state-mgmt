import { makeObservable, observable, action, computed } from 'mobx';

export class Counter {
    numberOfClicks = 0;

    constructor() {
        makeObservable(this, {
            numberOfClicks: observable,
            increment: action,
            reset: action,
            shouldShowCongratulationsMessage: computed,
        });
    }

    increment = (incrementBy) => {
        this.numberOfClicks += incrementBy;
    }

    reset = () => {
        this.numberOfClicks = 0;
    }

    get shouldShowCongratulationsMessage() {
        return this.numberOfClicks >= 10;
    }
}