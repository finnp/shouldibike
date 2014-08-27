var net = require('./classifier.js')

console.log(net({
  windspeed: 5/67,
  hum: 80/100,
  temp: 35/42
}))

console.log(net({
  windspeed: 10/67,
  hum: 80/100,
  temp: 5/42
}))

console.log(net({
  windspeed: 10/67,
  hum: 42/100,
  temp: 22/42
}))


console.log(net({hum: 0.81, temp: 0.24785714285714344, windspeed: 0.125}))