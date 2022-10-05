const leapYears = function (year) {
    answer = false;
    if (year % 4 === 0) {
        (year % 100 === 0)?(year % 400 === 0)? answer = true:
        answer = false:
        answer = true;

        return answer;
    }else return answer;
};

// Do not edit below this line
module.exports = leapYears;
