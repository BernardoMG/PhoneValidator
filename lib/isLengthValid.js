// phone number length rules validation
module.exports = function (number) {
  if (number.length >= 7 && number.length <= 12) {
    return true
  } else {
    return false
  }
}