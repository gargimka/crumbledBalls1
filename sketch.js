
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(400,500,800,50);
  //ball=new Ball(200,400,40);
  box=new Box(500,250,20,100);
  box2=new Box(700,250,20,100);
  box3=new Box(600,300,290,20);
  box4=new Box(100,450,20,20);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  //ball.display();	
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(box4.body,box4.body.position,{x:16,y:-16});
	}
}


