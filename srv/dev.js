'use strict'

// create our options
const opts = {
  stats: {
    collector: true
  },
  mesh: {
    base: true
  }
}

// fire up our service
require('seneca')()
  .use('stats', opts.stats)
  .use('toolbag-stats')
  .use('mesh', opts.mesh)
