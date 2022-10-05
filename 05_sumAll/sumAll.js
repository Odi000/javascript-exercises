const sumAll = function (numOne, numTwo) {
    let sum = 0;
    if (numOne < 0 || typeof (numOne) !== 'number' || numTwo < 0 || typeof (numTwo) !== 'number') {
        return 'ERROR';
    } else if (numOne < numTwo) {
        for (let i = numOne; i <= numTwo; i++) {
            sum += i;
        } return sum;
    } else {
        for (let i = numTwo; i <= numOne; i++) {
            sum += i;
        } return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
