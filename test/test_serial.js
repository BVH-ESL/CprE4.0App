// var SerialPort = require("serialport").SerialPort
// var port = new SerialPort("/dev/ttyUSB0", {
//   baudrate: 115200
// });
//
// port.on('data', function (data) {
//   console.log('Data: ' + data);
// });

var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var port = new SerialPort('/dev/ttyUSB0', {
  parser: serialport.parsers.raw,
  baudrate: 115200
});

port.on('data', function (data) {
  console.log('Data: ' + typeof(data));
});
