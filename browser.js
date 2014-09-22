var classifier = require('./classifier.js')

shouldibike(document.getElementById('city').value)

document.getElementById('input').onsubmit = function (e) {
  e.preventDefault()
  shouldibike(document.getElementById('city').value)
  return false
}

function shouldibike(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city

  var request = new XMLHttpRequest()
      
  request.open('GET', url, true)
  request.withCredentials = false
  request.onreadystatechange = weatherReady
  request.send()

  function weatherReady() {
    if(request.readyState === 4) {
      var rawWeather = JSON.parse(request.responseText)
      console.log('city', rawWeather.name)
      var inputWeather = {
        hum: rawWeather.main.humidity / 100,
        temp: Math.max((rawWeather.main.temp - 273.15) / 42, 0),
        windspeed: rawWeather.wind.speed / 67
      }
      console.log(inputWeather)
      var output = classifier(inputWeather).cnt
      console.log(output)
      document.getElementById('answer').innerText = output > 0.5 ? 'Yes!' : 'Nope'
    }
  }  
}