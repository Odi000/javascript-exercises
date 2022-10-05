const removeFromArray = function (array) {
    let newArr = array;
    if (arguments.length > 1) {
        for (let i = 1; i < arguments.length; i++) {
            newArr = newArr.filter((a) => a !== arguments[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
