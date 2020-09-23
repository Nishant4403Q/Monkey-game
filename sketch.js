
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
 monkey=createSprite(80,315,20,20); 
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  FoodGroup=createGroup();
  score=0;
  
}


function draw() {
background(180);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
    }
  monkey.velocityY = monkey.velocityY + 1.8;
 // console.log(ground.x); 
  monkey.collide(ground);
  food();
  obstacles();
  stroke("white");
  fill("white");
  textSize(20);
  text("score:" + score,300,50)
  stroke("black");
  fill("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime:" + survivalTime,100,50);
 drawSprites(); 
}
function food(){
if (frameCount % 80 === 0){
banana=createSprite(200,215,20,20);
  banana.y = Math.round(random(120,200));
  banana.lifetime=100;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  FoodGroup.add(banana);
}
}
function obstacles(){
if (frameCount % 300 === 0){
    obstacle = createSprite(200,330,20,20);
   obstacle.velocityX = -3;
   console.log(obstacle.velocityX);
  obstacle.lifetime=100;
  obstacle.scale=0.1;
  obstacle.addImage(obstacleImage);
}
}




