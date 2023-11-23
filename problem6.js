function problem6(inventory, BWM, AUDI) {
  return inventory.filter((carDetail, index) => {
    if (carDetail.car_make === BWM || carDetail.car_make === AUDI) {
      return inventory[index];
    }
  });
}
module.exports = { problem6 };
