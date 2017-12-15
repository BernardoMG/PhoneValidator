const hasInvalidChars = require('./hasInvalidChars')
const isPlusValid = require('./isPlusValid')
const isLengthValid = require('./isLengthValid')
const isAreaValid = require('./isAreaValid')
const isValidNumber = require('./isValidNumber')

module.exports = function (line, areaCodes, validNumbers) {
  if (hasInvalidChars(line)) {
    return validNumbers
  } else if (!/[+]/.test(line)) {
    let cleanLine = line.replace(/\s/g, '')
    if (cleanLine.length === 3) {
      return isAreaValid(cleanLine, areaCodes, validNumbers)
    } else {
      return isValidNumber(cleanLine, areaCodes, validNumbers)
    }
  } else {
    let numberPlus = line.replace(/\s/g, '').substring(1)
    if (numberPlus.length === 3) {
      return isAreaValid(numberPlus, areaCodes, validNumbers)
    } else if (isPlusValid(line) && isLengthValid(numberPlus)) {
      return isAreaValid(numberPlus, areaCodes, validNumbers)
    } else {
      return validNumbers
    }
  }
}