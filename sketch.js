var imagemDoGato1, imagemDoGato2, imagemDoGato3, gato, imagemDoRato1, imagemDoRato2, rato
var bgImg
function preload() {
    //carregue as imagens aqui
    bgImg.loadImage("garden.png")
    imagemDoGato1.loadImage("images/cat1.png");
    imagemDoRato1.loadImage("images/mouse1.png");
    imagemDoGato2.loadImage("images/cat2.png", "images/cat3.png");
    imagemDoRato2.loadImage("images/mouse2.png", "images/mouse3.png");
    imagemDoGato3.loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato=createSprite(500,400,20,20);
    gato.addAnimation("gato", imagemDoGato1);
    gato.scale = 0.2;
    rato=createSprite(500,400,20,20);
    rato.addAnimation("rato", imagemDoRato1);
}

function draw() {

    background("images/garden.png");
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
if(gato.x-rato.x < gato.width - rato.width/2){

    gato.velocityX = 0
    gato.addAnimation("gatofeliz", imagemDoGato3);
    gato.changeAnimation("gatofeliz");
    gato.x = 300
}
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){

    rato.addAnimation("provocaçao", imagemDoRato2);
    rato.changeAnimation("provocaçao");
    rato.frameDelay = 25;

    gato.velocityX = -5;
      
  }
}
