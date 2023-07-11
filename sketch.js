
var trex, trex_running;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  // adding scale and position to t-rex
  trex.scale = 0.5;
  trex.x = 50;
  ground = createSprite(200, 180, 400, 20);

}

function draw(){
  background("white")

  // jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  // apply gravity to the t-rex
  trex.velocityY = trex.velocityY + 0.5;

  // stop t-rex from falling down
  trex.collide(ground);

  drawSprites();

}
