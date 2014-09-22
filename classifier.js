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
