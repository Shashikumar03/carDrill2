const { inventory } = require("../inventory");
const { problem1 } = require("../problem1");
const ID = 33;
const carDetail = problem1(inventory, ID);

console.log(
  `car with id: ${carDetail[0].id} ${carDetail[0].car_year} ${carDetail[0].car_make} ${carDetail[0].car_model}`
);
