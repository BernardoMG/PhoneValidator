const expect = require('chai').expect
const fs = require('fs')
const isValidNumber = require('../lib/isValidNumber')
const areaCodesFile = require('../config/areacodes')
const areaCodes = fs.readFileSync(areaCodesFile.file, 'utf-8').split('\n')

const validNumber = {}

describe('Number starts with 00 or area code', function () {
  it('three digits', function (done) {
    const res = { '1': 1 }
    const numbers = isValidNumber('00112', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('less than three digits', function (done) {
    const res = { '1': 1 }
    const numbers = isValidNumber('0011', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('between three to twelve digits', function (done) {
    const res = { '1': 2 }
    const numbers = isValidNumber('001123456', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('more than twelve digits', function (done) {
    const res = { '1': 2 }
    const numbers = isValidNumber('001123456789345', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('invalid area code', function (done) {
    const res = { '1': 2 }
    const numbers = isValidNumber('0099123456', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('valid area code', function (done) {
    const res = { '1': 2, '351': 1 }
    const numbers = isValidNumber('0035123456', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })
})

