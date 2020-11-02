var car1
var bound1
var bound2
var bound3
var car2
var car3
var car4
var area
var speed
var weight
var wall1
var wall2
var wall3
var wall4
function setup() {
  createCanvas(800,400);
  area=createSprite(0,400,16000,4000)
  car1= createSprite(10, 40, 10, 10);
  car2= createSprite(10, 140, 10, 10);
  car3= createSprite(10, 240, 10, 10);
  car4= createSprite(10, 340, 10, 10);
  wall1=createSprite(790,40,10,30)
  wall2=createSprite(790,140,10,30)
  wall3=createSprite(790,240,10,30)
  wall4=createSprite(790,340,10,30)
 bound1=createSprite(400,90,1600,10)
 bound2=createSprite(400,190,1600,10)
 bound3=createSprite(400,290,1600,10)
 car1.velocityX=random(30)
 car2.velocityX=random(50)
 car3.velocityX=random(45)
 car4.velocityX=random(60)
 car1.weight=2250
 car2.weight=1458
 car3.weight=3765
 car4.weight=2669 
}


function draw() {
  
  background(255,255,255);  
  area.shapeColor="black";
    car1.shapeColor="white";
    car2.shapeColor="white";
    car3.shapeColor="white";
    car4.shapeColor="white";
    if(wall1.x-car1.x < (car1.width+wall1.width)/2){
      car1.velocityX=0;
      car1.shapeColor="green"
   
     
    }
    if(wall2.x-car2.x < (car2.width+wall2.width)/2){
      car2.velocityX=0;
      car2.shapeColor="yellow"
   
     
    }
    if(wall3.x-car3.x < (car3.width+wall3.width)/2){
      car3.velocityX=0;
      car3.shapeColor="yellow"
   
     
    }
    if(wall4.x-car4.x < (car4.width+wall4.width)/2){
      car4.velocityX=0;
      car4.shapeColor="red"
   
     
    }
    
    
  
  drawSprites();

}