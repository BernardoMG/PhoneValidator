const expect = require('chai').expect
const fs = require('fs')
const isAreaValid = require('../lib/isAreaValid')
const areaCodesFile = require('../config/areacodes')
const areaCodes = fs.readFileSync(areaCodesFile.file, 'utf-8').split('\n')

const validNumber = {}

describe('Area code validation', function () {
  it('valid area code', function (done) {
    const res = { '1': 1 }
    const numbers = isAreaValid('112', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('invalid area code', function (done) {
    const res = { '1': 1 }
    const numbers = isAreaValid('991', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })
})