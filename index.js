var express= require('express');
var socket= require('socket.io');


//App setup
var app=express();
var server=app.listen(3000,()=>{
    console.log("listenning to request to port")
})


//Static Files
app.use(express.static('public'));


//socket setup
var io =socket(server)
io.on('connection',(socket)=>{
    console.log('made socket connection',socket.id);
    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
    io.sockets.emit('chat', data);
    });

})