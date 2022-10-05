const fibonacci = function (nr) {
    const trueNr = parseInt(nr);
    let a = 0, b = 1, c = trueNr;

    if (trueNr < 0) return 'OOPS';

    for (let i = 2; i <= trueNr; i++) {
        c = a + b;
        a = b;
        b = c;
    } return c;
};

// Do not edit below this line
module.exports = fibonacci;
