var garden,rabbit;
var gardenImage,rabbitImage;
var apple,appleImage,orangeLeaf,orangeImage,redImage,redLeaf

function preload(){
  gardenImage = loadImage("garden.png");
  rabbitImage = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
 orangeImage = loadImage("orangeLeaf.png");
  redImage = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo

garden=createSprite(200,200);
garden.addImage(gardenImage);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImage);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  var select_sprites=Math.round(random(1,3));
  if(frameCount%80===0){
 
  switch (select_sprites) {
    case 1:
      createOrangeLeafs()
      break;
    case 2:
      createApples()
      break;
    case 3:
      createRedLeafs()
      break;
    default: break;
  }}
  rabbit.x=World.mouseX;
  drawSprites();
  
}

function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage);
  apple.scale=0.07;
  apple.velocityY=4;
  apple.lifetime=150;

}
function createOrangeLeafs(){
  orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeImage);
  orangeLeaf.scale=0.08;
  orangeLeaf.velocityY=4;
  orangeLeaf.lifetime=150;
  
}
function createRedLeafs(){
  redLeaf=createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redImage);
  redLeaf.scale=0.06;
  redLeaf.velocityY=4;
  redLeaf.lifetime=150;}
