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

