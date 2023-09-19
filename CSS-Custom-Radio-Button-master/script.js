const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsus",
    value: Number(prompt("enter the number")),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
