var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,spawnZombie

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.5
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 
spawnZombie()



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
if(keyDown("RIGHT_ARROW")){
player.x = player.x+30
}
if(keyDown("LEFT_ARROW")){
  player.x = player.x-30
  }
drawSprites();

}
function spawnZombie(){
  if (frameCount % 60 === 0){
    var cloud = createSprite(displayWidth,displayHeight-300,40,10);
    //cloud.y = Math.round(random(80,120));
    cloud.scale = 0.5;
    cloud.velocityX = -3;
  }
}