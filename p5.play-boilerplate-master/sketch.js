
var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect=createSprite(200, 200, 90, 50);
  fixedRect.shapeColor="red";

  movingRect=createSprite(400,200,50,90);
  movingRect.shapeColor="red";
}

function draw() {

  background(255,255,255);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log (movingRect.y-fixedRect.y);

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="black";
    fixedRect.shapeColor="black";
  }
  else {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  
  drawSprites();
}