 var car,wall;
 var speed,weight;
 
function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 75, 20);
 wall=createSprite(1200,200,60,height/2);
 wall.debug=true;
 car.debug=true;
 speed=random(55,90);
 weight=random(400,1500);
}


function draw() {
  background(80,80,80); 
  car.velocityX=speed;
  
  if(wall.x-car.x<car.width/2+wall.width/2)
  {
    
    car.velocityX=0;
    var deformation=0.5*speed*speed*weight/22500; 
if(deformation<100){
  
  car.shapeColor="green";

}
  if(deformation<180&&deformation>100){
    
    car.shapeColor="yellow";
   
  }
  if(deformation>180){
   
    car.shapeColor="red";
        }
  }
 
  drawSprites();
  if(keyWentDown("space")){
    car.x=50;
    speed=random(55,90);
    weight=random(400,1500);
    car.velocityX=speed;

  }
}