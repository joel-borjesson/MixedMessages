const messages = {
    spiritAnimal: ['test1'],
    _luckyNumbers: [],
        get luckyNumbers() {
            return this._luckyNumbers;
        },
        set luckyNumbers(newNum) {
            this._luckyNumbers.push(newNum);
        },
    inspiration: []
};

// Duplicate numbers should not be allowed, check if the random number already exists in the array
let i = 0;

while (i<6) {
    let randNum = Math.floor(Math.random()*100)+1;
    if (i === 0) {
        messages.luckyNumbers = randNum;
        i++;
    } else if (messages.luckyNumbers.includes(randNum) === false) {
        messages.luckyNumbers = " " + randNum;
        i++;
    }
}


console.log(`Your lucky numbers are: ${messages.luckyNumbers}`);