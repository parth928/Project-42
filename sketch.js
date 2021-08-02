var iss, spacecraft, bg, issImg, scImg;
var hasDocked= false;
var scImg1, scImg2, scImg3, scImg4;


function preload()
{
bg = loadImage("Docking-undocking/spacebg.jpg");
issImg = loadImage("Docking-undocking/iss.png");
scImg = loadImage("Docking-undocking/spacecraft1.png");
scImg1 = loadImage("Docking-undocking/spacecraft2.png");
scImg2 = loadImage("Docking-undocking/spacecraft3.png");
scImg3 = loadImage("Docking-undocking/spacecraft4.png"); 
}

function setup() 
{
  createCanvas(600,400);
  spacecraft=createSprite(285, 240, 50, 50);
  spacecraft.scale=0.15;
  spacecraft.addImage(scImg);

  iss=createSprite(330,130);
  iss.addImage(issImg);
  iss.scale=0.25;
}

function draw() 
{
  background(bg);  
  spacecraft.addImage(scImg);

  //controls for movement
  if(!hasDocked)
  {
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown("UP_ARROW"))
    {
      spacecraft.y=spacecraft.y-2;

    }
    if(keyDown("LEFT_ARROW"))
    {
      spacecraft.addImage(scImg3);
      spacecraft.x=spacecraft.x-1;
      
    }
    if(keyDown("RIGHT_ARROW"))
    {
      spacecraft.addImage(scImg2);
      spacecraft.x=spacecraft.x+1;
      
    }
    if(keyDown("DOWN_ARROW"))
    {
      spacecraft.addImage(scImg1)
      
    }
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10))
  {
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking Successful", 200,300);
    
  }
  drawSprites();
}