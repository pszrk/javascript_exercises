const convertToCelsius = function(F) {
  return Number(((F - 32) * 5/9).toFixed(1));
}

const convertToFahrenheit = function(C) {
  return Number(((C * 1.8) + 32).toFixed(1));
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
