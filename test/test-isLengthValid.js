const expect = require('chai').expect
const isLengthValid = require('../lib/isLengthValid')

describe('Number length', function () {
  it('less than seven digits', function (done) {
    const flag = false
    const result = isLengthValid('00112')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })

  it('between seven to twelve digits', function (done) {
    const flag = true
    const result = isLengthValid('351123456')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })

  it('more than twelve', function (done) {
    const flag = false
    const result = isLengthValid('3511234566743')
    expect(JSON.stringify(result)).to.equal(JSON.stringify(flag))
    done()
  })
})