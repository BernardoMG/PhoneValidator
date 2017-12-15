module.exports = function (line) {
  if (/[+]/.test(line)) {
    return true
  }
  return false
}