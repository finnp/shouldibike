var classifier = require('./classifier.js')

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Berlin'

var request = new XMLHttpRequest()
    
request.open('GET', url, true)
request.withCredentials = false
request.onreadystatechange = weatherReady
request.send()

function weatherReady() {
  var rawWeather = JSON.parse(request.responseText)
  var inputWeather = {
    hum: rawWeather.main.humidity / 100,
    temp: Math.max((rawWeather.main.temp - 273.15) / 42, 0),
    windspeed: rawWeather.wind.speed / 8 // need to convert mps
  }
  console.log(inputWeather)
  console.log(classifier(inputWeather))
}