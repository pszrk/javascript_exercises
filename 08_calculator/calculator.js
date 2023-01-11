const add = function(first, second) {
    return first + second;
};

const subtract = function(first, second) {
  return first - second;
};

const sum = function(numbers) {
	let sum = 0;

    for(const number of numbers)
      sum += number;
    return sum;
};

const multiply = function(numbers) {
  let product = 1;
  
  for(const number of numbers){
    product *= number;
  }
  return product;
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
  let factorial = 1;

	for(let i = 1; i <= number; i++){
    factorial *= i;
  }
  return factorial;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
