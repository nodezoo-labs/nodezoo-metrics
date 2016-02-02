'use strict'

// Our default options
const defaults = {
  name: 'nodezoo-stats'
}

// Export a seneca plugin
module.exports = function stats (opts) {
  const seneca = this
  const extend = seneca.util.deepextend

  // merge defaults with user options
  opts = extend(defaults, opts)

  // we will add custom stat emits here

  // meta-data for seneca
  return {
    name: opts.name
  }
}
