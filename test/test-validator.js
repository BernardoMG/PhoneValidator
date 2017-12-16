const expect = require('chai').expect
const fs = require('fs')
const validator = require('../lib/validator')
const areaCodesFile = require('../config/areacodes')
const areaCodes = fs.readFileSync(areaCodesFile.file, 'utf-8').split('\n')

const validNumber = {}

describe('Valid numbers', function () {
  it('three digits', function (done) {
    const res = { '1': 1 }
    const numbers = validator('112', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('three digits starting with plus symbol', function (done) {
    const res = { '1': 2 }
    const numbers = validator('+112', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('three digits starting with 00', function (done) {
    const res = { '1': 3 }
    const numbers = validator('00112', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('three digits containing some white spaces', function (done) {
    const res = { '1': 4 }
    const numbers = validator('  0  0  1  1   2', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('seven digits', function (done) {
    const res = { '1': 4, '351': 1 }
    const numbers = validator('003519600', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('twelve digits', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('+2 4 4 9 1 0 0 0  0  0 0  0', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })
})

describe('Invalid numbers', function () {
  it('number contains letters', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('1A1H2', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('number contains invalid chars', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('1/1!234*%$', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('number with invalid length', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('+351234', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('number with invalid area code', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('+991912345', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('number has only white spaces', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('         ', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('empty number', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('\n', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })
})
