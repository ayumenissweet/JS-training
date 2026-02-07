const convertToCelsius = function (value) {
  return (((value - 32) * 5) / 9).toFixed(1);
};

const convertToFahrenheit = function (value) {
  return ((value * 9) / 5 + 32).toFixed(1);
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
