var wall,thickness;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
thickness=random(22,83);

wall=createSprite(1200,200,thickness,height/2);

  drawSprites();
}
speed=random(223,321);
weight=random(30,52);
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=bullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}

if (hasColliede(bullet,wall))
{
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}

if (f=damage<10)
{
  wall.shapeColor=color(0,255,0);
}

damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(wallthickness*wallThickness*wallthickness);