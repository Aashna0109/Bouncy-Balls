const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world; 
var ball,ground

function setup() {
  createCanvas(800,400);
  
engine = Engine.create()
//connect engine to world
world = engine.world

var boptions = {
  restitution : 1.0
}

ball = Bodies.circle(400,50,30,boptions)
World.add(world,ball)
console.log(ball)

var goptions = {
  isStatic : true
}
ground = Bodies.rectangle(400,380,600,10,goptions)
World.add(world,ground)


}

function draw() {
  background("black"); 

  Engine.update(engine)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)


  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,800,15)
}