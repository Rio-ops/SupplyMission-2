var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	leftBoxSprite=createSprite(300,610,20,100)
    leftBoxSprite.shapeColor=color("red")

	rightBoxSprite=createSprite(490,610,20,100)
	rightBoxSprite.shapeColor=color("red")

	bottomBoxSprite=createSprite(400,650,200,20)
	bottomBoxSprite.shapeColor=color("red")
     
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width, 2);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 2 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);

	leftBox = Bodies.rectangle(300,600,100,20,{isStatic:true});
	World.add(world, leftBox);
	
	rightBox = Bodies.rectangle(400,600,100,20,{isStatic:true});
	World.add(world, rightBox);

	bottomBox = Bodies.rectangle(300,620,20,200,{isStatic:true});
	World.add(world, bottomBox);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 5 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode ===83) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,true)
  }
  else if(keyCode ===65) {
       helicopterSprite.x = helicopterSprite.x-15
	   translation={
          x:-15, y:0
	   }	  
	Matter.Body.translate(packageBody,translation)
  }
  else if (keyCode ===68) {
	  helicopterSprite.x = helicopterSprite.x+15
	  translation={
		  x:15, y:0
	  }
	  Matter.Body.translate(packegeBody,translation)
  }
}