var wss = require('./wsRFIDReadder.js');
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var uid = "";

var myPort = new SerialPort('/dev/ttyUSB0', {
   baudRate: 115200,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\n")
});

myPort.on('open', showPortOpen);
myPort.on('data', sendSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}

function sendSerialData(data) {
  datas = String(data).split(' ');
  datas.shift()
  uid = datas.join('-');
  console.log(datas.join('-'));
  saveLatestData(uid);
}

function showPortClose() {
   console.log('port closed.');
}

function showError(error) {
   console.log('Serial port error: ' + error);
}

module.exports = myPort;
