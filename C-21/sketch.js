var frect, mrect;
var car, wall;

function setup() {
  
  createCanvas(1200,800);
  frect=createSprite(600, 400, 50, 50);
  mrect=createSprite(400,200,50,50);
  car = createSprite(200,200,100,50);
  wall = createSprite(1000,200,50,200);

  car.velocityX = 4

}

function draw() {
  background("black");  
  mrect.x = mouseX
  mrect.y = mouseY

  frect.shapeColor = "blue"
  mrect.shapeColor = "red"
  car.shapeColor = "white"
  wall.shapeColor = "green"

  

  console.log(mrect.x - frect.x)
 
 if (isTouching(car,wall)){
   text("Car crashed",800,200)
 }
 bounceoff(car,wall)

 if (isTouching(mrect,frect)){
  frect.shapeColor = "yellow"
  mrect.shapeColor = "teal"
}

  drawSprites();
}

