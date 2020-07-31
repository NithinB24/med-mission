var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redline1sprite,redline2sprite,redline3sprite;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.1;               
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	redline1sprite = createSprite(400,650,150,20)

	redline2sprite = createSprite(334,610,20,100)

	redline3sprite = createSprite(466,610,20,100)

	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});

	World.add(world, packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	Engine.run(engine);

}


function draw() {
	background(0);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;

	packageSprite.depth = redline1sprite.depth;
	packageSprite.depth = packageSprite.depth + 1;

	helicopterSprite.depth = redline1sprite.depth;
	helicopterSprite.depth = helicopterSprite.depth + 1;


	drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);	
	}
}
