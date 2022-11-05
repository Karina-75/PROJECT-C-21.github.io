
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function preload() {

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var balls_option = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}
	ball = Matter.Bodies.circle(200, 500, 15, balls_option);
	World.add(engine.world, ball);
	ground = new Ground(600, 670, 1200, 10);
	leftSide = new Ground(850, 605, 20, 120);
	rightSide = new Ground(1100, 605, 20, 120);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(0);
	ground.display();
	leftSide.display();
	rightSide.display();
	ellipse(ball.position.x, ball.position.y, 15, 15);
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:2.5,y:-2.5});
	}
}

