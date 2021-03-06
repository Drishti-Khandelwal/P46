
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var score = 0;
var robot;
var alien1;
var alienSprite;
function preload() {
    backgroundImg = loadImage("images/b3.jpg");
    
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    //ground = new Ground(600,height,1200,20);
    robot = new Robot(displayWidth-250,500,300);
 alien = new Aliens(20,50,150);
 //alienSprite = createSprite(200,150,20,20)
 //alienSprite.velocityX = 10;
}

function draw(){
    background(backgroundImg);
     
    Engine.update(engine);
   
   // ground.display();
   robot.display();
   alien.display();
 // alienSprite.x= alien.body.position.x;
 // alienSprite.y= alien.body.position.y;
   drawSprites();
}
function keyPressed(){
 if(keyCode===UP_ARROW){
//Matter.Body.applyForce(robot.body,robot.body.position,{x:0,y:-50})  
robot.body.position.y = robot.body.position.y-50
}
if(keyCode===DOWN_ARROW){
    //Maody.applyForce(robot.body,robot.body.position,{x:0,y:-50})  
    robot.body.position.y = robtter.Bot.body.position.y+50
}
if(keyCode===RIGHT_ARROW){
    Matter.Body.setVelocity(alien.body,{x:20,y:0})  
  //  Matter.Body.setStatic(alien.body, true)
}
}
