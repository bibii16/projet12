var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;



function preload(){
  pathImg = loadImage("path.png"); 
  boyImg = loadAnimation ("jake2.png","jake4.PNG","jake5.png");
 
}

function setup(){
  createCanvas(400,400);

  path=createSprite( 200,200)
  path.addImage("path",pathImg);
  path.velocityY = 5;
  path.scale=1.2;

  boy=createSprite(180,340,30,30 ); 
  boy.addAnimation("jake",boyImg);
  boy.scale=1;

 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.

//crie um sprite de menino
//adicione uma animação de corrida para ele
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  

  drawSprites();
}
