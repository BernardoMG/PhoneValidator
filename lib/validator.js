const checkPlus = require('./checkPlus')

// -> has either 3 digits or between 7 and 12 digits (inclusive)                                                                            -
// -> can have the optional '+' character in the beginning (before any digit)                                                               - DONE
// -> can start with '00', in which case it shouldn't start with the '+' sign                                                               - DONE
// -> if it starts with '00', these two digits don't count to the maximum number of digits                                                  - 
// -> cannot have any letters                                                                                                               - DONE
// -> cannot have any symbol aside from the beginning '+' sign                                                                              - DONE
// -> cannot have any whitespace between the '+' sign and the first digit but can have any amount of whitespace in all other places         - DONE

module.exports = function (line, areacodes, validNumbers) {
  if (/[a-zA-Z]/.test(line) || !line.replace(/\s/g, '').length) {
    console.log('INVALID')
    return validNumbers
  } else if (!/[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]/.test(line)) {
    // começa com 00 ou code area
    console.log(line)
    return validNumbers
  } else if (/[!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?]/.test(line)) {
    console.log('INVALID')
    return validNumbers
  } else {
    if (!checkPlus(line)) {
      console.log('INVALID')
      return validNumbers
    } else {
      console.log(line)
      return validNumbers
    }
  }
}