/*let SocketIO = require('socket.io');

let ioServer = SocketIO();
console.log('Socket Server waiting for connections');

ioServer.on('connection', function (socket) {
    console.log(`Socket Client connected with id=${socket.id}`);
});*/

var socket = require('socket.io'), 
  http = require('http'),
  server = http.createServer(), 
  socket = socket.listen(server);
  
  socket.on('connection', function(connection) {
     console.log('Connected');
     
     connection.on('message', function(msg){
      console.log("server msg>>>"+msg);

      const bufferText = Buffer.from(msg);

      console.log("bufferText>>> "+bufferText)

       socket.emit('message', bufferText.toString('hex'));
     });


  });


  function stringToHex(str) {

  //converting string into buffer
   let bufStr = Buffer.from(str, 'utf8');

  //with buffer, you can convert it into hex with following code
   return bufStr.toString('hex');

   }




  server.listen(5000, function(){
    console.log('Server started');
  });

