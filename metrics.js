'use strict'

// Our default options
const defaults = {
  name: 'nodezoo-metrics'
}

module.exports = function (opts) {
  const seneca = this
  const extend = seneca.util.deepextend

  opts = extend(defaults, opts)

  // We will add specific stuff for nodezoo here.


  return {
    name: opts.name
  }
}
