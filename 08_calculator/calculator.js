const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++
  }
  return sum;
};

const multiply = function (array) {
  let sum = array[0];

  for (let i = 1; i < array.length; i++) {
    sum *= array[i];
  } return sum;
};

const power = function (a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result *= a;
  } return result;
};

const factorial = function (a) {
  if (a == 0 || a == 1) {
    return 1;
  } else if (a > 0) {
    for (let i = a-1; i > 0; i--) {
      a *= i;
    } 
  } return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
