class Field {
    constructor(){
        this._filled = false;
        this._value = "";
    }

    onclick(dice){
        if (!this._filled) {
            this._filled = true;
            if (this.validate(dice)) {
                this._value = this.score(dice);  
            } else {
                this._value = "x"
            }
        }
    }

    get value() {
        return typeof this._value === "number" ? this._value: 0;
    }

    get displayValue() {
        return this._value
    }
}

class NumberField extends Field{
    constructor(number) {
        this._number = number;
        this.validate = dice => true;
    }

    score(dice) {
        return this._number * dice.map(die => die === this._number).reduce((acc, v) => acc + v);
    }
}

class OfAKind extends Field{
    constructor(number) {
        this._number = number;
    }

    validate(dice) {
        let counts = [0, 0, 0, 0, 0, 0];
        for (die in dice){
            counts[die - 1]++;
            if (counts[die - 1] >= this._number) {
                return true;
            }
        }
        return false;
    }
}

class OfAKind extends Field{
    constructor(number) {
        this._number = number;
    }

    validate(dice) {
        let counts = [0, 0, 0, 0, 0, 0];
        for (die in dice){
            counts[die - 1]++;
            if (counts[die - 1] >= this._number) {
                return true;
            }
        }
        return false;
    }
}

