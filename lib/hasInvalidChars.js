module.exports = function (line) {
  if (/[a-zA-Z]/.test(line) || !line.replace(/\s/g, '').length || /[!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?]/.test(line)) {
    return true
  }
  return false
}