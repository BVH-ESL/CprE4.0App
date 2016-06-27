// var wss = require('./wsRFIDReadder.js');
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
  saveLatestData(uid);
}

function showPortClose() {
   console.log('port closed.');
}

function showError(error) {
   console.log('Serial port error: ' + error);
}

var WebSocketServer = require('ws').Server;
var SERVER_PORT = 8081;               // port number for the webSocket server
var wss = new WebSocketServer({port: SERVER_PORT}); // the webSocket server
var connections = new Array;          // list of connections to the server

wss.on('connection', handleConnection);

function handleConnection(client) {
 console.log("New Connection"); // you have a new client
 connections.push(client); // add this client to the connections array
 // console.log(myPort.sendData());
 client.on('message', sendToSerial); // when a client sends a message,

 client.on('close', function() { // when a client closes its connection
   console.log("connection closed"); // print it out
 });
}

function sendToSerial(data) {
 console.log("sending to serial: " + data);
 // myPort.sendSerialData(data);
}

function broadcast(data) {
 for (myConnection in connections) {   // iterate over the array of connections
  connections[myConnection].send(data); // send the data to each connection
 }
}

function saveLatestData(data) {
  console.log(data);
  // if there are webSocket connections, send the serial data
  // to all of them:
  if (connections.length > 0) {
   broadcast(data);
  }
}

module.exports = wss;
