# shouldibike

Deciding for you wether it is a good idea to bike.

```
data-range < data.ldjson
```


```
- temp : Normalized temperature in Celsius. The values are divided to 41 (max) 
- atemp: Normalized feeling temperature in Celsius. The values are divided to 50 (max) 
- hum: Normalized humidity. The values are divided to 100 (max) 
- windspeed: Normalized wind speed. The values are divided to 67 (max) 
- casual: count of casual users 
- registered: count of registered users 
- cnt: count of total rental bikes including both casual and registered
```

current weather
```
Temperature, Kelvin (subtract 273.15 to convert to Celsius)
```
Access-Control-Allow-Origin:* :)
http://api.openweathermap.org/data/2.5/weather?q=Berlin
