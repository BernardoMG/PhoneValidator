// check if number has plus symbol
module.exports = function (line) {
  if (/[+]/.test(line)) {
    return true
  }
  return false
}