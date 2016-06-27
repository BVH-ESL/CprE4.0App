var wsUri = 'ws://192.168.106.160:8081';
// var websocket;
websocket = new WebSocket(wsUri);

websocket.onopen = openSocket;
websocket.onmessage = showData;

function openSocket() {

}

function showData(result) {
  console.log(result.data);
}
