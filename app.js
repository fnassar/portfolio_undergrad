let express = require('express'); // include express module
let app = express(); // create an express application
app.use('/', express.static('public')); // set the root route to serve static files from public folder

//Initialize the actual HTTP server
let http = require('http'); // include http module
let server = http.createServer(app); // create a server using express app

//Initialize socket.io
let io = require('socket.io'); // include socket.io module
io = new io.Server(server); // create a socket server using http server

// connect to server
io.sockets.on('connect', (socket) => { // listen for connect event
    console.log("we have a new client: ", socket.id); // print a message when a new client connects
    socket.on('disconnect', () => { // listen for disconnect event
        console.log("client: ", socket.id, "is disconnected"); // print a message when a client disconnects
    })
})

//run the createServer
let port = process.env.PORT || 4000; // set the port number
server.listen(port, () => { // listen for requests on port 4000
    console.log("Server listening at port: " + port); // print a message when the server starts listening
});