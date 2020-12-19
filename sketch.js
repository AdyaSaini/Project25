const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, dustbin, dustbin1, ground;

function preload(){
}

function setup() {
	createCanvas(1200, 350);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1200,15);
	paperBall = new Paper(200,250);
	dustbin = new Dustbin(830,275,20,115);
	dustbin1 = new Dustbin(900,275,20,115);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  paperBall.display();
  dustbin.display();
  dustbin1.display();

  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:17, y:-17})
	}
}