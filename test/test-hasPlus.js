const expect = require('chai').expect
const hasPlus = require('../lib/hasPlus')

describe('Number with plus symbol', function () {
  it('with plus symbol', function (done) {
    const flag = true
    const result = hasPlus('+112')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })

  it('without plus symbol', function (done) {
    const flag = false
    const result = hasPlus('112')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })
})