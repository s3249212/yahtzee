function rollDice() {
    let dice = [];
    for (let i = 0; i < 5; i++){
        dice.push(Math.floor(6 * Math.random()) + 1);
    }
    return [6, 6, 6, 3, 3];
}

function toCounts(dice){
    let counts = [];
    for (let i = 0; i < 6; i++){
        counts.push(dice.filter(e => e == i + 1).length);
    }
    return counts;
}

function isStraight(counts, desiredNumberInOrder){
    const length = counts.length;
    let i = 0;
    let c = 0;
    while (i < length - desiredNumberInOrder) {
        while (i + c < length && c < desiredNumberInOrder && counts[i + c]) {
            c++;
        }
        if (c >= desiredNumberInOrder){
            return true;
        } else {
            i += c + 1;
            c = 0;
        }
    }
    return false;
}

console.log(toCounts(rollDice()));


function fillOutEverything(){
    dice = rollDice()

    console.log();
    // show dice
    diceElements = document.getElementById('dice').getElementsByTagName('td');
    for (let i = 0; i < 5; i++){
        diceElements[i].textContent = dice[i];
    }

    counts = toCounts(dice);
    console.log(counts);
    
    numbers = ['aces', 'twos', 'threes', 'fours', 'fives', 'sixes'];
    console.log(numbers.entries())
    for ([index, numberName] of numbers.entries()){
        document.getElementById(numberName).textContent = (index + 1) * counts[index];
    }

    document.getElementById('3oak').textContent = counts.some(e => e >= 3) ? dice.reduce((sum, cur) => sum + cur): 0;
    document.getElementById('4oak').textContent = counts.some(e => e >= 4) ? dice.reduce((sum, cur) => sum + cur): 0;
    document.getElementById('full_house').textContent = (counts.some(e => e == 3) && counts.some(e => e == 2)) ? 25: 0;
    document.getElementById('small_straight').textContent = isStraight(counts, 4) ? 30: 0;
    document.getElementById('large_straight').textContent = isStraight(counts, 5) ? 40: 0;
    document.getElementById('top_score').textContent = counts.some(e => e == 5)? 50: 0;
    document.getElementById('chance').textContent = dice.reduce((sum, cur) => sum + cur);
}



document.getElementById('roll').addEventListener('click', fillOutEverything);



