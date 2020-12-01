let socket = io();
// let myColor = "white";
// let myCubes = [];
let sky;
let planes;
let randomPlane;
let canvas1;
let canvas2;

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
// image(contrail, data.x, data.y, 50, 48);
p2.push()
p2.noStroke();
p2.fill(255, 255, 255, 50);
p2.rect(data.x, data.y, 7, 7)
p2.rect(data.x, data.y + 10, 7, 7)
p2.pop()
p1.image(data.myPlane, data.x, data.y)
}

// function drawPlane(data) {
// p1.push()
// p1.image(data.myPlane, data.x, data.y)
// p2.pop()
// }

// planep = loadImage("./assets/images/pp.png");
// contrail = loadImage("./assets/images/contrail.png");


  let sketch1 = function(p1){
    p1.preload = function() {
            sky = p2.loadImage("./assets/images/back.jpeg");

      plane1 = p1.loadImage("./assets/images/plane1.png");
      plane2 = p1.loadImage("./assets/images/plane2.png");
      plane3 = p1.loadImage("./assets/images/plane3.png");
      plane4 = p1.loadImage("./assets/images/plane4.png");
      plane5 = p1.loadImage("./assets/images/plane5.png");
      plane6 = p1.loadImage("./assets/images/plane6.png");
      plane7 = p1.loadImage("./assets/images/plane7.png");
      plane8 = p1.loadImage("./assets/images/plane8.png");
      plane9 = p1.loadImage("./assets/images/plane9.png");
      planeA = p1.loadImage("./assets/images/planea.png");

      planes = [plane2, plane3, plane4, plane5, plane6, plane7, plane8, plane9]
      randomPlane = p1.random(planes);

          myFont2 = p2.loadFont('./assets/font/FreePixel2.ttf');
    };
   p1.setup = function(){
   	canvas1 = p1.createCanvas(p1.windowWidth, p1.windowHeight, 0, 0);
    canvas1.position(0,0);
    p2.imageMode(p2.CENTER);
    p2.image(sky, p2.width/2, p2.height/2, p2.windowWidth, p2.windowHeight)
    p2.push()
    p2.textSize(20)
    p2.textFont(myFont2)
    p2.fill("white")
    p2.text("leave a message for your loved one", 50, 50)
    p2.textSize(12)
    p2.text("(or for anyone watching)", 50, 70)
    p2.pop();
   }

   p1.draw = function(){
fly();

   }
}
function fly() {
  p1.clear();
  p1.image(randomPlane, p1.mouseX, p1.mouseY);
  // randomPlane.loadPixels();
  // const image64 = randomPlane.canvas.toDataURL();
  // console.log(image64);

  // let message = {
  //   myPlane: image64,
  // };
  // socket.emit("plane", planemessage);
}


let sketch2 = function(p2) {

    p2.preload = function() {
    }

p2.setup = function(){
canvas2 = p2.createCanvas(p2.windowWidth, p2.windowHeight);
canvas2.position(0,0);

}

p2.draw = function(){
contrail();

}
}

function contrail() {
if (p2.mouseIsPressed) {
  // fill(myColor);
  // translate(mouseX + 25, mouseY + 25);
  // let a = atan2(- 24, - 25);
  // rotate(a);
  // image(contrail, mouseX, mouseY, 37, 36)
  p2.noStroke();
  p2.fill(255, 255, 255, 170);
  p2.rect(p2.mouseX , p2.mouseY +20, 7, 7)
  p2.rect(p2.mouseX, p2.mouseY +30, 7, 7)
  // cursor("./assets/images/plane1.png")

  let message = {
    x: p2.mouseX,
    y: p2.mouseY +30,
    // color: myColor,
  };
  socket.emit("mouse", message);
}
}


let p1 = new p5(sketch1);
let p2 = new p5(sketch2);

// p2.draw = function(){
//   for(let i = 0; i < myCubes.length; i++) {
//    myCubes[i].p2.run();
//  }
//  if (myCubes.length > 20) {
//        myCubes.p2.splice(i, 10)

//      }
//
//
// }
// }
//
// function contrail() {
// if (p2.mouseIsPressed) {
//   // fill(myColor);
//   // translate(mouseX + 25, mouseY + 25);
//   // let a = atan2(- 24, - 25);
//   // rotate(a);
//   // image(contrail, mouseX, mouseY, 37, 36)
//   p2.addCube();
//   // cursor("./assets/images/plane1.png")
//
//   let message = {
//     x: p2.mouseX,
//     y: p2.mouseY +30,
//     // color: myColor,
//   };
//   socket.emit("mouse", message);
// }
// }
//
// class Cube {
// constructor(temp_x,temp_y) {
//   this.x=temp_x;
//   this.y=temp_y;
// }
//
// display() {
//   p2.push();
//  p2.rect(mouseX , mouseY +20, 7, 7)
//    p2.rect(mouseX, mouseY +30, 7, 7)
//   p2.pop();
// }
//
//
// run() {
//   this.p2.display();
// }
// }

// cursor("./assets/images/plane7.png");

// function mouseDragged() {
//
//   // fill(myColor);
//   // translate(mouseX + 25, mouseY + 25);
//   // let a = atan2(- 24, - 25);
//   // rotate(a);
//   // image(contrail, mouseX, mouseY, 37, 36)
//   fill(255, 255, 255, 200);
//   rect(mouseX , mouseY +50, 7, 7)
//   rect(mouseX, mouseY +60, 7, 7)
//   // cursor("./assets/images/plane1.png")
//
//   let message = {
//     x: mouseX,
//     y: mouseY +60,
//     // color: myColor,
//   };
//   socket.emit("mouse", message);
// }

//

//
// // function setColor(assignedColor) {
// //   myColor = assignedColor;
// }

//
// function draw() {
//
//   for(let i = 0; i < myCubes.length; i++) {
//   myCubes[i].run();
// }
// if (myCubes.length > 20) {
//       myCubes.splice(i, 10)
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
//  rect(mouseX , mouseY +20, 7, 7)
   //rect(mouseX, mouseY +30, 7, 7)
//   pop();
// }
//
//
// run() {
//   this.display();
// }
// }
