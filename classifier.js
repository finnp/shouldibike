//brain-train --input temp,hum,windspeed --output cnt --function < data-normalized.ldjson > classifier.js
module.exports = function (input) {
  var net = {"layers":[{"windspeed":{},"hum":{},"temp":{}},{"0":{"bias":1.330083864174301,"weights":{"windspeed":0.42925754539274064,"hum":-7.434447883789391,"temp":-3.5600813691488042}},"1":{"bias":-0.40041844487211165,"weights":{"windspeed":-1.579431277924952,"hum":-1.6925797565198446,"temp":-0.16724966557048312}},"2":{"bias":-0.4346164512352473,"weights":{"windspeed":4.288449459403085,"hum":3.973804139731611,"temp":-8.722831159648582}}},{"cnt":{"bias":1.1227730651564638,"weights":{"0":-4.666169825110429,"1":1.4833554652234349,"2":-2.9605622679303405}}}],"outputLookup":true,"inputLookup":true};

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
