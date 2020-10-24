
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime;


function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(450, 300);
  

  monkey = createSprite(50,280,20,50);
  monkey.addAnimation("running", monkey_running);
  
  
  monkey.scale = 0.1;
  monkey.x = 50;
  
  
  ground = createSprite(200,290,900,20);
 
   ground.x = ground.width/2 
   survivalTime=0;
   score = 0;
   obstacleGroup= new Group();
   FoodGroup= new Group();
}


function draw() {
background(255);
  monkey.collide(ground) 
  ground.velocityX = -2
  console.log(ground.x)
  
 if(ground.x<0){
  ground.x = ground.width/2 
 }
  
  
  if(keyDown("space")&&monkey.y>200) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  spawnBanana()
  spawnObstacle()
  drawSprites();
  stroke("black")
  textSize(20);
  fill("black");
  text("Score = "+score,50,50);
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time = "+survivalTime,250,50);
  
}


function spawnBanana(){
  if(frameCount%60===0){
    banana = createSprite(600,200,40,10);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.y = Math.round(random(100,200))
    
      banana.depth = monkey.depth
      banana.scale = 0.05;
      monkey.depth = monkey.depth+1
      banana.lifetime = 300;
      FoodGroup.add(banana);
  }
  }

  function spawnObstacle(){
    if(frameCount%300===0){
      obstacle = createSprite(600,250,40,10);
      obstacle.addImage(obstacleImage);
      obstacle.velocityX = -5;  
        obstacle.scale = 0.15;
        obstacle.lifetime = 300;
        obstacleGroup.add(obstacle);
    }
    }





