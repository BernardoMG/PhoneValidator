const expect = require('chai').expect
const hasInvalidChars = require('../lib/hasInvalidChars')

describe('Invalid chars validation', function () {
  it('with invalid chars', function (done) {
    const flag = true
    const result = hasInvalidChars('00/1$1%2')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })

  it('without invalid chars', function (done) {
    const flag = false
    const result = hasInvalidChars('00112')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })

  it('plus symbol should be valid', function (done) {
    const flag = false
    const result = hasInvalidChars('+00112')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })
})