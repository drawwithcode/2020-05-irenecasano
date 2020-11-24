let socket = io();
// let myColor = "white";
let cursors = [];
let sky;

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
// socket.on("color", setColor);

// function setColor(assignedColor) {
//   myColor = assignedColor;
// }

function newConnection() {
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data) {
// fill(data.color);
// rect(data.x, data.y, 30, 20);
// image(contrail, data.x, data.y, 50, 48);
// cursor("./assets/images/plane1.png")
push()
fill(255, 255, 255, 50);
rect(data.x, data.y +50, 7, 7)
rect(data.x, data.y +60, 7, 7)
pop()
}

function preload(){
sky = loadImage("./assets/images/back.jpeg");
  planep = loadImage("./assets/images/pp.png");

  plane1 = loadImage("./assets/images/plane1.png");
  plane2 = loadImage("./assets/images/plane2.png");
  plane3 = loadImage("./assets/images/plane3.png");
  plane4 = loadImage("./assets/images/plane4.png");
  plane5 = loadImage("./assets/images/plane5.png");
  plane6 = loadImage("./assets/images/plane6.png");
  plane7 = loadImage("./assets/images/plane7.png");
  plane8 = loadImage("./assets/images/plane8.png");
  plane9 = loadImage("./assets/images/plane9.png");
cursors = [plane1, plane2, plane3, plane4, plane5, plane6, plane7, plane8, plane9]

  contrail = loadImage("./assets/images/contrail.png");

  myFont = loadFont('assets/font/FreePixel.ttf');
  myFont2 = loadFont('assets/font/FreePixel2.ttf');
}


function setup() {
  createCanvas(windowWidth,windowHeight)
    noStroke()
imageMode(CENTER)
image(sky, width/2, height/2, windowWidth, windowHeight)

  // let randomImg = random(cursors)
  cursor("./assets/images/pp.png");
  // cursor("./assets/images/plane1.png")
 //  imageMode(CENTER);
 // colorMode(HSB)
 // myTint = color(random(255));
 textSize(20)
 textFont(myFont2)
 text("leave a message for your loved one", 50, 50)
 textSize(12)
 text("(or for anyone watching)", 50, 70)
}

function draw() {
  // put drawing code here

}

function mouseDragged() {
  push();
  // fill(myColor);
  // translate(mouseX + 25, mouseY + 25);
  // let a = atan2(- 24, - 25);
  // rotate(a);
    // rect(mouseX, mouseY, 30, 20)
  // tint(myTint);
  // image(contrail, mouseX, mouseY, 37, 36)
  fill(255, 255, 255, 200);
  rect(mouseX , mouseY +50, 7, 7)
  rect(mouseX, mouseY +60, 7, 7)
  // cursor("./assets/images/plane1.png")
  pop();
  let message = {
    x: mouseX,
    y: mouseY +60,
    // color: myColor,
  };
  socket.emit("mouse", message);
}



// let socket = io();
// // let myColor = "white";
// let myCursor;
// let myCubes = [];
//
// socket.on("connect", newConnection);
// socket.on("mouseBroadcast", drawOtherMouse);
// // socket.on("color", setColor);
//
// // function setColor(assignedColor) {
// //   myColor = assignedColor;
// }


//
// function newConnection() {
//   console.log("your id: " + socket.id);
// }
//
// function drawOtherMouse(data) {
// // fill(data.color);
// // rect(data.x, data.y, 30, 20);
// image(contrail, data.x, data.y, 25, 24);
// // cursor("./assets/images/plane1.png")
// }
//
// function preload(){
//   plane1 = loadImage("./assets/images/plane1.png");
//   contrail = loadImage("./assets/images/contrail.png");
// }
//
// function setup() {
//   createCanvas(windowWidth,windowHeight)
//   background("lightskyblue");
//   cursor("./assets/images/plane1.png");
//   // cursor("./assets/images/plane1.png")
// }
//
// function draw() {
//
//   for(let i = 0; i < myCubes.length; i++) {
//   myCubes[i].run();
// }
// if (myCubes.length > 20) {
//       myCubes.splice(0, 10)
//     }
//
//
// }
//
// function mouseMoved() {
//   addCube();
//   let message = {
//     x: mouseX,
//     y: mouseY,
//     // color: myColor,
//   };
//   socket.emit("mouse", message);
// }
//
//
// function addCube(){
// const aNewCube = new Cube(mouseX, mouseY)
// myCubes.push(aNewCube);
// }
//
//
// class Cube {
// constructor(temp_x,temp_y) {
//   this.x=temp_x;
//   this.y=temp_y;
// }
//
// display() {
//   push();
//  image(pi,this.x,this.y, 25, 24);
//   pop();
// }
//
//
// run() {
//   this.display();
// }
// }
