const expect = require('chai').expect
const fs = require('fs')
const validator = require('../lib/validator')
const areaCodesFile = require('../config/areacodes')
const areaCodes = fs.readFileSync(areaCodesFile.file, 'utf-8').split('\n')

const validNumber = {}

describe('Validator: valid numbers', function () {
  it('three digits', function (done) {
    const res = { '1': 1 }
    const numbers = validator('112', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('starting with plus symbol', function (done) {
    const res = { '1': 2 }
    const numbers = validator('+112', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('starting with 00', function (done) {
    const res = { '1': 3 }
    const numbers = validator('00112', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('contains empty spaces', function (done) {
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

describe('Validator: invalid numbers', function () {
  it('contains letters', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('1A1H2', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('contains invalid chars', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('1/1!234*%$', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('invalid length', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('+351234', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('invalid area code', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('+991912345', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('only empty spaces', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('         ', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })

  it('empty number', function (done) {
    const res = { '1': 4, '351': 1, '244': 1 }
    const numbers = validator('', areaCodes, validNumber)
    expect(JSON.stringify(numbers)).to.equal(JSON.stringify(res))
    done()
  })
})
