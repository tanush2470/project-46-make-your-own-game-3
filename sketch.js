var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
  movingrect.debug=true;
}

function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x)
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";  
  }
  drawSprites();
}