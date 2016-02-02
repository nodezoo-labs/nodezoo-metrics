'use strict'

// create our options
const opts = {
  msgstats: {
    collect: true
  }
}

// fire up our service
require('seneca')()
  .use('../stats')
  .use('msgstats', opts.msgstats)
