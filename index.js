const fs = require('fs')
const readline = require('readline')
const stream = require('stream')
const areaCodesFile = require('./config/areacodes.js')

let areacodes = []
let validNumbers = {}
let reader

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
  readPhoneNumbersFile(process.argv[2])
}

// read the input file into a stream
function readPhoneNumbersFile(file) {
  reader = readline.createInterface({
    input: fs.createReadStream(file),
    output: new stream
    //terminal: true
  });
  lineProcess()
}

// Process each line of the input file
function lineProcess() {
  reader.on('line', function (line) {
    console.log(line)
  })

  reader.on('close', function () {
    console.log('No more lines')
    process.exit(0)
  });
}