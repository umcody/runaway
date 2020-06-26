//const io = require('socket.io')(http)
const PORT = 7000;
module.exports = function(app, mongoose) {
  const io = require("socket.io")
  const http = require('http').Server(app)
  const socket = io(http);
  const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  });

  socket.on('connection', (socket) => {
      console.log('connected')
      socket.on('message', (evt) => {
          console.log(evt)
          socket.broadcast.emit('message', evt)
      })  
  })
  socket.on('disconnect', (evt) => {
      console.log('some people left')
  })

}
  
