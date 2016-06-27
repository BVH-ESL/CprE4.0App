var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var port = new SerialPort('/dev/ttyUSB0', {
  parser: serialport.parsers.raw,
  baudrate: 115200
});

console.log("start scan");

port.on('data', function (data) {
  datas = String(data).split(' ');
  datas.shift()
  var uid = datas.join('-');
  console.log(datas.join('-'));
});
