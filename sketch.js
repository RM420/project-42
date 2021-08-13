var iss, spacecraft, issIMG, spacebg, spacecraft1, spacecraft2, spacecraft3, spacecraft4
var hasDocked = false

function preload(){
  issIMG = loadImage("image/iss.png");
  spacebg = loadImage("image/spacebg.jpg");
  spacecraft1 = loadImage("image/spacecraft1.png");
  spacecraft2 = loadImage("image/spacecraft2.png");
  spacecraft3 = loadImage("image/spacecraft3.png");
  spacecraft4 = loadImage("image/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(285, 240);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.10

  iss = createSprite(330, 130);
  iss.addImage(issIMG);
  iss.scale = 0.25
  iss.setCollider("rectangle", 0, 0, 125, 200)
  
}

function draw() {
  background(spacebg);

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft3)
    spacecraft.x = spacecraft.x + 10
  } 
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft4)
    spacecraft.x = spacecraft.x - 10
  } 
  if(keyDown("UP_ARROW")){
    spacecraft.addImage(spacecraft2)
    spacecraft.y = spacecraft.y - 10
  } 
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft1)
    spacecraft.y = spacecraft.y + 10
  } 

  if(spacecraft.isTouching(iss)){
    hasDocked = true
    fill("white");
    textSize(35)
    text("Docking Successfull",245, 300);
  }
  
  drawSprites();
}