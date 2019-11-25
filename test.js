const dgram = require('dgram');
var str;
var message;
function send() {
  message = str.toString()
  const client = dgram.createSocket('udp4');
  const port = 5003
  client.send(message, port, 'localhost', (err) => {
    client.close();
  });
  console.log(message)
}

function random() {
  str = Math.floor(Math.random() * 10);
  str.toString()
  console.log(str)
}

setInterval(random, 1000)
setInterval(send, 1500)