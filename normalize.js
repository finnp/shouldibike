var fs = require('fs')
var ldj = require('ldjson-stream')
var through = require('through2').obj

var metadata = require('./metadata.json')

// normalize: (x - min) / (max - min)

fs.createReadStream('data.ldjson')
  .pipe(ldj.parse())
  .pipe(through(function (data, enc, cb) {
    // var normalized = {}
    // for(attr in data) {
    // only normalize count data, since the rest is already normalized in the set
      data['cnt'] = (data['cnt'] - metadata['cnt'].min) / ( metadata['cnt'].max - metadata['cnt'].min)
    // }
    this.push(data)
    cb()
  }))
  .pipe(ldj.serialize())
  .pipe(fs.createWriteStream('data-normalized.ldjson'))