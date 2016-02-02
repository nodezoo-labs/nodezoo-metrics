'use strict'

const Lab = require('lab')
const Seneca = require('seneca')

const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it

describe('nodezoo-stats', () => {
  it('Dummy test', (done) => {
    const seneca = Seneca({log: 'silent'})
    seneca.ready(done)
  })
})
