'use strict'

var opts = {
  metrics: {
    collector: {
      enabled: true
    }
  },
  mesh: {
    auto: true
  }
}

require('seneca')()
  .use('vidi-metrics', opts.metrics)
  .use('vidi-toolbag-metrics')
  .use('vidi-seneca-metrics')
  .use('vidi-influx-sink')
  .use('mesh', opts.mesh)
