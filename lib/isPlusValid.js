// plus symbol rules validation
module.exports = function (line) {
  let cleanSpaces = line.replace(/\s/g, '')
  if (cleanSpaces.startsWith('+')) {
    const editedLine = line.split('+')
    if (/^\s/.test(editedLine[1])) {
      return false
    }
    return true
  }
  return false
}