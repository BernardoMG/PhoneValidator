const fs = require('fs')
const areaCodesFile = require('./config/areacodes.js')

let areacodes = []
let validNumbers = {}

// Check args
if (process.argv.length < 3) {
  console.log('The interface we\'re expecting is: $ node your_script input_file')
  process.exit(1)
} else {
  loadAreaCodes()
}

// loads all area codes from '.txt' file
function loadAreaCodes() {
  areacodes = fs.readFileSync(areaCodesFile.file, 'utf-8').split('\n')
}
