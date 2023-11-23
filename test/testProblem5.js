const { inventory } = require("../inventory");
const { problem4 } = require("../problem4");
const { problem5 } = require("../problem5");
const TWO_THOUSAND = 2000;

const carYear = problem4(inventory);
const olderCar = problem5(inventory, carYear, TWO_THOUSAND);
console.log(` length of the is : ${olderCar.length}`);
console.log(olderCar);
