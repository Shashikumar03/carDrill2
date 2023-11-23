const { inventory } = require("../inventory");
const { problem2 } = require("../problem2");

const lastCar = inventory.length - 1;
const lastCarDetails = problem2(inventory, lastCar);

console.log(
  `Last car is ${lastCarDetails[0].car_make} ${lastCarDetails[0].car_model}`
);
