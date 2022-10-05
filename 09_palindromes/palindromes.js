const palindromes = function (string) {
    const regEx = /[a-zA-Z]+/g;
    const myArr = string.match(regEx),
        newStr = myArr.join('').toLowerCase();
    let revString = '';

    for (let i = newStr.length - 1; i >= 0; i--) {
        revString += newStr[i];
    }

    if (newStr === revString){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
