//method 1 fairly easy
/*
const reverseString = function(str) {
    let reversedStr = '';
    for(let i=0; i < str.length; i++){
        reversedStr = str[i] + revesedStr;
    }
    return revesedStr;
};
*/
//method 2 easy but I prefer the first one
const reverseString = function(str){
    let reversedStr = '';
    for(let i=str.length-1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

// Do not edit below this line
module.exports = reverseString;
