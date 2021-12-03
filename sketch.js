var dino,dino_img;
var bordas;

function preload(){
  dino_img = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200);

  dino = createSprite(50,100,20,20);
  dino.addAnimation("running",dino_img);
  dino.scale = 0.5;

  bordas = createEdgeSprites();

}

function draw(){
  background('white');

  if(keyDown("space")){
    dino.velocityY = -10;
  }

  //gravidade
  dino.velocityY = dino.velocityY + 1;

  dino.collide(bordas[3]); 


  drawSprites();
}


