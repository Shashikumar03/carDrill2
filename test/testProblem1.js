const { inventory } = require("../inventory");
const { problem1 } = require("../problem1");
const ID = 33;
const carDetail = problem1(inventory, ID);
console.log(carDetail);
