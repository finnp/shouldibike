(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./classifier.js":2}],2:[function(require,module,exports){
module.exports = function anonymous(input) {
  var net = {"layers":[{"windspeed":{},"hum":{},"temp":{}},{"0":{"bias":2.663318169072646,"weights":{"windspeed":-1.724404421767734,"hum":-6.1770325543836355,"temp":-3.887489996685051}},"1":{"bias":1.0124430659709105,"weights":{"windspeed":-0.16621057152930307,"hum":-2.418128968222372,"temp":-0.6944138968203807}},"2":{"bias":0.712564950860795,"weights":{"windspeed":-5.610487375343748,"hum":-4.452203852724577,"temp":8.760926785625182}}},{"cnt":{"bias":-1.968416024502586,"weights":{"0":-4.309188250309845,"1":2.4124686067072854,"2":2.763285227760119}}}],"outputLookup":true,"inputLookup":true};

  for (var i = 1; i < net.layers.length; i++) {
    var layer = net.layers[i];
    var output = {};
    
    for (var id in layer) {
      var node = layer[id];
      var sum = node.bias;
      
      for (var iid in node.weights) {
        sum += node.weights[iid] * input[iid];
      }
      output[id] = (1 / (1 + Math.exp(-sum)));
    }
    input = output;
  }
  return output;
}

},{}]},{},[1]);
