class GuessingGame {

    minValue;

    maxValue;

    currentValue;

    constructor() {
        this.minValue = null;
        this.maxValue = null;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.currentValue = Math.round((this.maxValue - this.minValue) / 2 + this.minValue);
        return this.currentValue;
    }

    lower() {
        this.maxValue = this.currentValue;
        return this.guess();
    }

    greater() {
        this.minValue = this.currentValue;
        return this.guess();
    }
}

module.exports = GuessingGame;
