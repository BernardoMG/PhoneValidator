const isLengthValid = require('./isLengthValid')
const isAreaValid = require('./isAreaValid')

module.exports = function (line, areaCodes, validNumbers) {
  if (line.startsWith('00')) {
    let number = line.substring(2)
    if (isLengthValid(number)) {
      return isAreaValid(number, areaCodes, validNumbers)
    }
    return validNumbers
  } else if (isLengthValid(line)) {
    return isAreaValid(line, areaCodes, validNumbers)
  } else {
    return validNumbers
  }
}