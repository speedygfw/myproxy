 
var httpProxy = require('http-proxy')
 
var proxy = httpProxy.createProxy();
 
var options = {
  'pad.fwallenborn.de': 'http://localhost:9001',
  'pad.fwall.de':       'http://localhost:9001',
  'spielfeld24.de':     'http://localhost::8000'

}
 
require('http').createServer(function(req, res) {
  proxy.web(req, res, {
    target: options[req.headers.host]
  }, function(e){
console.log(e);
});
}).listen(80);
