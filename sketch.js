var runner,runner_path;
var path,path_runner;
var bomb,bombimage;
var coin,coinimage;
var energy,energyimage;
var power,powerimage;



function preload(){
  //pre-load images
runner_path=loadAnimation("Runner-1.png","Runner-2.png");
path_area=loadImage("path.png");
powerimage=loadImage("power.png");
bombimage=loadImage("bomb.png");
coinimage=loadImage("coin.png");
energyimage=loadImage("energyDrink.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
 //path
path=createSprite(200,50,100,10);
path.addImage(path_area);
path.velocityY=2;
console.log(path.height);
  
  //runner
runner=createSprite(200,350,70,350);
runner.addAnimation("path",runner_path);

runner.scale=0.05;

console.log(path.width);


leftboundary=createSprite(0,0,100,800);
leftboundary.visible=false;

rightboundary=createSprite(400,0,100,800);
rightboundary.visible=false;



}
function draw() {
  background(0);

  if(path.y > 400){
    console.log(path.y)
    
    path.y = height/2
  }
 
runner.collide(leftboundary);
runner.collide(rightboundary);

if(keyIsDown(RIGHT_ARROW)){
  runner.velocityX =5;
}
if(keyIsDown(LEFT_ARROW)){
 runner.velocityX=-5;
}
 spawnBombs()
 spawncoins()
 spawndrinks()
 spawnpower()
 
  drawSprites()
}
function spawnBombs(){
  if(frameCount % 120 === 0){
    bomb = createSprite(350,350,70,350);
    bomb.addImage(bombimage);
    
    bomb.scale =0.1;
    bomb.velocity=2;
    
    
  }
}

function spawncoins(){
  if(frameCount % 70 === 0){
    coin = createSprite(150,350,70,350);
    coin.addImage(coinimage);
    
    coin.scale =0.1;
    coin.velocity=2;}
}

function spawndrinks(){
  if(frameCount % 200 === 0){
    energy = createSprite(100,350,70,350);
    energy.addImage(energyimage);
    
    energy.scale =0.1;
    energy.velocity=2;



}

}
function spawnpower(){



  if(frameCount % 200 === 0){
    power = createSprite(250,350,70,350);
    power.addImage(powerimage);
    
    power.scale =0.1;
    power.velocity=2;

}
}





