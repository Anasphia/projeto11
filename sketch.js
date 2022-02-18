
var runner,runnerimg;
var path,pathimg;

function preload(){
  runnerimg = loadAnimation("Runner-1.png","Runner-2.png");
    pathimg =loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
 

  
  path=createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY = 3;
  path.scale=1.2;

  
  runner = createSprite(130,200,30,30);
  runner.addAnimation("runner",runnerimg);
  runner.scale =0.08;
  
}

function draw() {
  background("black");
  path.velocityY = 3;
runner.x=World.mouseX;
  if(path.y > 400){
    path.y = height/2;
  }
    console.log(path.y);
  drawSprites();
}
