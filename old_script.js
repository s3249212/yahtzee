function number(dice, chosenNumber){
    return dice.reduce((acc, d) => acc + chosenNumber * (d === chosenNumber), 0);
}

function threeofakind(dice) {

}

class Field {
    constructor(){
        this._filled = false;
        this._value = 0;
    }

    score(dice) {
        return 0;
    }

    validate(dice) {
        return true;
    }

    onclick(dice){
        if (!this._filled) {
            if (this.validate(dice)) {
                this._value = this.score(dice);
                this._filled = true;
            }
        }
    }
}

class TopField extends Field {
    constructor(number){
        super();
        this.number = number;
    }

    score(dice){
        return dice.reduce((acc, d) => acc + chosenNumber * (d === chosenNumber), 0);
    }
}

class BottomField extends Field {
    constructor(validateFunction, scoreFunction){
        super();
        this.validate = validateFunction;
        this.score = scoreFunction;
    }
}

const topFields = []
for (let i = 1; i <= 5; i++) {
    topFields.push(new TopField(i));
}

console.log(topFields);

const bottomFields = [
    new BottomField(dice => dice.toSorted().reduce((acc, die) => ) )
]

console.log(number([1, 2, 1, 4, 5], 1));