const convertToCelsius = function(tem) {
  let res = (tem - 32) * (5 / 9);
  if (!Number.isInteger(res))
    res = Number(res.toFixed(1));
  return (res);
};

const convertToFahrenheit = function(tem) {
  let res = tem * (9 / 5) + 32
  if (!Number.isInteger(res))
    res = Number(res.toFixed(1));
  return (res);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
