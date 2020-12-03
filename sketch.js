
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
 
}


function draw() {
background(255);
  
  stroke("black");
  textSize(20);
  fill("black");
survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time: " +survivalTime,100,50);
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  drawSprites();
}


function food(){
 if (frameCount % 80 === 0){
   var banana = createSprite(500,Math.round(random(120,200)),10,10);
   banana.velocityX = -4;
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.lifetime=200;
  FoodGroup.add(banana);
 }
}

function obstacles(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(500,315,10,10);
   obstacle.velocityX = -4;
  obstacle.addImage(obstacleImage);
   obstacle.scale=0.2;
   obstacle.lifetime=200;
   obstacleGroup.add(obstacle);
 }
}
