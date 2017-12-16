const expect = require('chai').expect
const isPlusValid = require('../lib/isPlusValid')

describe('Number starts with +', function () {
  it('empty spaces before the plus symbol', function (done) {
    const flag = true
    const result = isPlusValid('    +00112')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })

  it('empty space between plus symbol and first digit', function (done) {
    const flag = false
    const result = isPlusValid('+ 00112')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })

  it('empty spaces after the first digit', function (done) {
    const flag = true
    const result = isPlusValid('+0 0 1 1 2 ')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })
})