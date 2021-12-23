var chiro,chiroImg ;
var Play=1;
var End=0;
var gameState=Play;
var ground;
var bullet1Img,bullet2Img,bullet3Img;
var laser1Img,laser2Img;
function preload(){
//variable name =loadAnimation("name of the image");
chiroImg=loadAnimation("boy1.png","boy2.png","boy3.png");
bullet1Img=loadImage("bullet1.png");
bullet2Img=loadImage("bullet2.png");
bullet3Img=loadImage("bullet3.png");
laser1Img=loadImage("laser1.png");
laser2Img=loadImage("laser2.png");
}



function setup() {
  createCanvas(1200,400);
//sprite=createSprite(x,y,w,h);
chiro =createSprite(20,300,50,50);
// sprite.addAnimation("lable",variable name);
chiro.addAnimation("chiro_walking",chiroImg);
chiro.scale=0.3;
chiro.x=60;
edges=createEdgeSprites();



ground=createSprite(200,390,400,10);
ground.velocityX=-4

obstaclesGroup=createGroup();
}


function draw() {
  background(255,255,255);  

if(keyDown("space")){
  chiro.velocityY=-15;
}
chiro.velocityY=chiro.velocityY+0.9;

if(ground.x<0){
  ground.x=ground.width/2;
}
chiro.collide(edges);

spawnObstacles();
  drawSprites();
} 
 function spawnObstacles(){
if(frameCount%60===0){

var obstacle =createSprite(random(400,600),random(290,400),10,40);
obstacle.velocityX=-6;
var rand=Math.round(random(1,5));
switch(rand){
  case 1:obstacle.addImage(bullet1Img);
  break;
  case 2:obstacle.addImage(bullet2Img);
  break;
  case 3:obstacle.addImage(bullet3Img);
  break;
  case 4:obstacle.addImage(laser1Img);
  break;
  case 5:obstacle.addImage(laser2Img);
  break;
}
obstaclesGroup.add(obstacle);
obstacle.scale=0.2;
obstacle.lifetime=200;
}
if(gameState=== Play){
ground.velocityX=-4;
if(keyDown("space")&& chiro.y >= 100) {
  chiro.velocityY = -13;
}
if(obstaclesGroup.isTouching(chiro)){
  gameState = END;
}
}
else if (gameState === END) {
ground.velocityX = 0;

obstaclesGroup.setVelocityXEach(0);
}


}
 