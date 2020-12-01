console.log("node is running!");

let express = require("express");

let socket = require("socket.io");

let app = express();

let port = process.env.PORT || 3000;

let server = app.listen(port);

app.use(express.static("public"));

let io = socket(server);

io.on("connection", newConnection);

function newConnection(socket) {
  console.log("new connection: " + socket.client.id);


  // let clientColor = getRandomColor()
let clientPlane = getPlane()
  // socket.emit("color", clientColor)
  socket.emit("myPlane", clientPlane)
  //sendo color to all the other clients
  // socket.broadcast.emit("newPlayer", clientColor);
  socket.on("mouse", mouseMessage);
    socket.on("plane", mouseMessage);
  // socket.on("mouse2", mouseMessage2);


  function mouseMessage(dataReceived) {
  console.log(socket.client.id, dataReceived);
  socket.broadcast.emit("mouseBroadcast", dataReceived)
  }

  // function mouseMessage2(dataReceived) {
  // console.log(socket.client.id, dataReceived);
  // socket.broadcast.emit("mouseBroadcast", dataReceived)
  //
  // }
}

function getPlane() {
  let myPlane = console.log(Buffer.from("image64", 'base64').toString('ascii'))
return myPlane}
// function getRandomColor() {
// var letters = "0123456789ABCDEF";
// var color = "#";
// for (var i = 0; i<6; i++) {
//   color += letters[Math.floor(Math.random() + 16)];
// }
// return color;
// }

// console.log("node is running!");
//
// let express = require("express");
//
// let socket = require('socket.io');
//
// let app = express();
//
// let port = process.env.PORT || 3000
//
// let server = app.listen(port);
//
// app.use(express.static("public"));
//
// let io = socket(server);
//
// io.on("connection", newConnection);
//
// function newConnection(socket) {
//   console.log("new connection: " + socket.client.id);
//   // let clientColor = getRandomColor();
//   // socket.emit("color", clientColor);
//
//   let clientPlane = getRandomPlane();
//
//   socket.emit("randomPlane", clientPlane)
//   socket.broadcast.emit("newPlayer", clientPlane);
// // socket.emit('image', image.toString('base64')); // image should be a buffer
//   socket.on("mouse", mouseMessage);
//   socket.on("planepos", generateRandomImg);
//
//
//   function mouseMessage(dataReceived) {
//   console.log(socket.client.id, dataReceived);
//   socket.broadcast.emit("mouseBroadcast", dataReceived);
//   }
//
//
//
//
// //   socket.on('image', async image => {
// //     // image is an array of bytes
// //     const buffer = Buffer.from(image);
// //     await fs.writeFile('/images/plane6', buffer).catch(console.error); // fs.promises
// // });
// //   }
// //
// // }
// // document.getElementById('file').addEventListener('change', function() {
// //
// //   const reader = new FileReader();
// //   reader.onload = function() {
// //     const bytes = new Uint8Array(this.result);
// //     socket.emit('image', bytes);
// //   };
// //   reader.readAsArrayBuffer(this.files[0]);
// //
// // }, false);
//
//
// //
// // function getRandomPlane() {
// // let numbers = "23456789";
// // let randomPlane = "plane";
// // for (var i = 0; i < 1; i++) {
// // randomPlane += numbers[Math.floor(Math.random() * 8)]
// // }
// // return randomPlane;
// // }
//
//
//
// // function getRandomPlane() {
// //
// // var randomPlane = new Array();
// // randomPlane[0] = "images/plane2.png";
// // randomPlane[1] = "images/plane3.png";
// // randomPlane[2] = "images/plane4.png";
// // }
//
// // function getRandomColor() {
// //   var letters = "0123456789ABCDEF";
// //   var color = "#";
// //   for (var i = 0; i < 6; i++) {
// //     color += letters[Math.floor(Math.random() * 16)];
// //   }
// //
// //   return color;
// // }
