const isLengthValid = require('./isLengthValid')
const isAreaValid = require('./isAreaValid')

// validation of possible phone number that starts with 00 or code area
module.exports = function (line, areaCodes, validNumbers) {
  if (line.startsWith('00')) {
    const number = line.substring(2)
    if (number.length === 3) {
      return isAreaValid(number, areaCodes, validNumbers)
    } else if (isLengthValid(number)) {
      return isAreaValid(number, areaCodes, validNumbers)
    } else {
      return validNumbers
    }
  } else if (isLengthValid(line)) {
    return isAreaValid(line, areaCodes, validNumbers)
  } else {
    return validNumbers
  }
}