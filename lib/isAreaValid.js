// area code validation and save valid number
module.exports = function (number, areaCodes, validNumbers) {
  let prefix;
  if (areaCodes.includes(number.slice(0, 1))) {
    prefix = number.slice(0, 1);
    validNumbers[prefix] = (validNumbers[prefix] || 0) + 1;
  } else if (areaCodes.includes(number.slice(0, 2))) {
    prefix = number.slice(0, 2);
    validNumbers[prefix] = (validNumbers[prefix] || 0) + 1;
  } else if (areaCodes.includes(number.slice(0, 3))) {
    prefix = number.slice(0, 3)
    validNumbers[prefix] = (validNumbers[prefix] || 0) + 1;
  } else {
    return validNumbers
  }
  return validNumbers
}