var fs = require('fs')
var ldj = require('ldjson-stream')
var through = require('through2').obj

var metadata = require('./metadata.json')


fs.createReadStream('data.ldjson')
  .pipe(ldj.parse())
  .pipe(through(function (data, enc, cb) {
      data['cnt'] = (data['cnt'] - metadata['cnt'].min) / ( metadata['cnt'].max - metadata['cnt'].min)
    this.push(data)
    cb()
  }))
  .pipe(ldj.serialize())
  .pipe(fs.createWriteStream('data-normalized.ldjson'))