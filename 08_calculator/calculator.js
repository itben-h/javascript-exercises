const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
  return (a - b);
};

const sum = function(arr) {
	return (arr.reduce((sum, e) => sum + e, 0));
};

const multiply = function(arr) {
  return (arr.reduce((sum, e) => sum * e));
};

const power = function(a, b) {
	return (Math.pow(a, b));
};

const factorial = function(num) {
	if (num == 1 || num == 0)
    return (1);
  else
    return (factorial(num - 1) * num);
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
