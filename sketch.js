
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var canvas, canvasmouse, options, mConstraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;
function preload()
{
	
}

function setup() {
	canvas = createCanvas(800,620);


	engine = Engine.create();
	world = engine.world;

	
	
	//Create the Bodies Here.
	pendulum1 = new Pendulum(200,300,20);
	sling1 = new Sling(pendulum1.body, { x:200, y:300})

	pendulum2 = new Pendulum(260,300,20);
	sling2 = new Sling(pendulum2.body, { x:260, y:300})

	pendulum3 = new Pendulum(320,300,20)
	sling3 = new Sling(pendulum3.body, {x:320, y:300 })
	
	pendulum4 = new Pendulum(380,300,20)
	sling4 = new Sling(pendulum4.body, {x:380, y:300 })

	pendulum5 = new Pendulum(440,300,20)
    sling5 = new Sling(pendulum5.body, {x:440, y:300 })
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  pendulum1.display();
  sling1.display();

  pendulum2.display();
  sling2.display();

  pendulum3.display();
  sling3.display();

  pendulum4.display();
  sling4.display();
 
  pendulum5.display();
  sling5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body , { x:mouseX, y:mouseY})
}



