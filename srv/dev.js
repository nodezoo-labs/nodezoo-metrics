'use strict'

var opts = {
  metrics: {
    collector: {
      enabled: true
    }
  },
  toolbag_metrics: {
  },
  influx_sink: {
    influx: {host: '192.168.99.100'}
  },
  mesh: {
    base: true
  }
}

require('seneca')()
  .use('vidi-metrics', opts.metrics)
  .use('vidi-toolbag-metrics', opts.toolbag_metrics)
  .use('vidi-influx-sink', opts.influx_sink)
  .use('mesh', opts.mesh)
