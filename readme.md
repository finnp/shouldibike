# shouldibike

Deciding for you wether it is a good idea to bike.

Training data is used from a [UCI bike sharing dataset](https://archive.ics.uci.edu/ml/datasets/Bike+Sharing+Dataset) 
with [dat-uci-bike-sharing](https://github.com/finnp/dat-uci-bike-sharing).


## Normalize data and train network
```
node normalize.js < data.ldjson
brain-train --input temp,hum,windspeed --output cnt --function < data-normalized.ldjson > classifier.js
```

## Metadata

Bike sharing data set
```
- temp : Normalized temperature in Celsius. The values are divided to 41 (max) 
- atemp: Normalized feeling temperature in Celsius. The values are divided to 50 (max) 
- hum: Normalized humidity. The values are divided to 100 (max) 
- windspeed: Normalized wind speed. The values are divided to 67 (max) 
- casual: count of casual users 
- registered: count of registered users 
- cnt: count of total rental bikes including both casual and registered
```

Current weather from [OpenWeatherMap](http://openweathermap.org/weather-data#current), e.g.
for [Berlin](http://api.openweathermap.org/data/2.5/weather?q=Berlin)
```
Temperature, Kelvin (subtract 273.15 to convert to Celsius)
```