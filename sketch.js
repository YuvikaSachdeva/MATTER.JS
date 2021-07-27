
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var object1;
var object2;
var object3;
var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object1= Bodies.rectangle(200,50,100,100);
  World.add(world,object1);
  console.log(object1);
  //console.log(object1.position.x);
  //console.log(object1.position.y);

  //object2
  object2=Bodies.rectangle(300,50,100,100);
  World.add(world,object2);
  console.log(object2);
  //object3
  object3=Bodies.circle(250,50,100,100)
  World.add(world,object3);
  console.log(object3)
}
function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  fill("blue")
    rect(object1.position.x,object1.position.y,50,50);
    fill("green")
    rect(object2.position.x,object2.position.y,50,50)
    fill("red")
    circle(object3.position.x,object3.position.y,50,50)
    fill("yellow")
}
