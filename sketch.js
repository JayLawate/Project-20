


var bullet,wall
var speed,weight
var thickness,damage


function setup() {
createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
 wall=createSprite(1500,200,60,height/2)

speed=random(223,321)
thickness=random(22,83)
weight=random(30,52)

bullet.velocitX =speed

}

function draw() {
  background("black");  


if(hascollided(bullet,wall)){

  bullet.velocitX=0
  damage=0.5*weight*speed*speed/(thickness *thickness*thickness )

  if(damage>10){

    wall.shapecolor=color(255,0,0)
  }

  if(damage<10){

    wall.shapecolor=color(0,255,0)
  }
}




    
  drawSprites();


}

function hascollided()
{

bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}