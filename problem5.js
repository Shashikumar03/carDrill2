function problem5(inventory, carYear, TWO_THOUSAND) {
  return carYear.reduce((result, year, index) => {
    if (year < TWO_THOUSAND) {
      result.push(inventory[index]);
    }
    return result;
  }, []);
}

module.exports = { problem5 };
