var fruits;
var apple, orange, banana, strawberry, mango, watermelon;
var appleImage, orangeImage, bananaImage, strawberryImage, mangoImage, watermelonImage;
var applegroup, orangegroup, bananagroup, strawberrygroup, mangogroup, watermelongroup;
var basket, basketImage;
var background, bgImage;
var wall;
var score = 0;

function preload(){
  appleImage = loadImage("Images/apple.png");
  bananaImage = loadImage("Images/banana.png");
  mangoImage = loadImage("Images/mango.png");
  orangeImage = loadImage("Images/orange.png");
  strawberryImage = loadImage("Images/strawberries.png");
  watermelonImage = loadImage("Images/watermelon.png");

  basketImage = loadImage("Images/basket.png");

  bgImage = loadImage("Images/background.jpg");

}

function setup(){
  createCanvas(displayWidth - 40, displayHeight/2 + 300);

  basket = createSprite(700, displayHeight - 250, 50, 50);
  basket.addImage(basketImage);
  basket.scale = 0.4;

  applegroup = new Group;
  orangegroup = new Group;
  bananagroup = new Group;
  strawberrygroup = new Group;
  mangogroup = new Group;
  watermelongroup = new Group;

}

function draw(){
  background(bgImage);

  basket.x = mouseX;  

  var selectfruits = Math.round(random(1, 6));

  if(frameCount % 60 === 0){
    switch(selectfruits){
      case 1 : createapple();
      break;

      case 2 : createbanana();
      break;

      case 3 : createmango();
      break;

      case 4 : createorange();
      break;

      case 5 : createwatermelon();
      break;

      case 6 : createstrawberry();
      break;

      default : break;

    }

  }

  if(basket.isTouching(applegroup)){
    applegroup.destroyEach();

    score = score + 1;

  }

  if(basket.isTouching(orangegroup)){
    orangegroup.destroyEach();

    score = score + 1;

  }

  if(basket.isTouching(bananagroup)){
    bananagroup.destroyEach();

    score = score + 1;

  }

  if(basket.isTouching(strawberrygroup)){
    strawberrygroup.destroyEach();

    score = score + 1;

  }

  if(basket.isTouching(mangogroup)){
    mangogroup.destroyEach();

    score = score + 1;

  }

  if(basket.isTouching(watermelongroup)){
    watermelongroup.destroyEach();

    score = score + 1;

  }


  drawSprites();

  fill("black");
  textSize(20);
  text("Score : " + score, displayWidth/8, 50);

}

function createapple(){
  apple = createSprite(Math.round(random(displayWidth, 10)), 0, 20, 20);
  apple.addImage(appleImage);
  apple.velocityY = 3;
  apple.scale = 0.03;
  apple.lifetime = 1000;
  applegroup.add(apple);

}

function createbanana(){
  banana = createSprite(Math.round(random(displayWidth, 10)), 0, 20, 20);
  banana.addImage(bananaImage);
  banana.velocityY = 3;
  banana.scale = 0.03;
  banana.lifetime = 1000;
  bananagroup.add(banana);

}

function createmango(){
  mango = createSprite(Math.round(random(displayWidth, 10)), 0, 20, 20);
  mango.addImage(mangoImage);
  mango.velocityY = 3;
  mango.scale = 0.007;
  mango.lifetime = 1000;
  mangogroup.add(mango);

}

function createorange(){
  orange = createSprite(Math.round(random(displayWidth, 10)), 0, 20, 20);
  orange.addImage(orangeImage);
  orange.velocityY = 3;
  orange.scale = 0.04;
  orange.lifetime = 1000;
  orangegroup.add(orange);

}

function createwatermelon(){
  watermelon = createSprite(Math.round(random(displayWidth, 10)), 0, 20, 20);
  watermelon.addImage(watermelonImage);
  watermelon.velocityY = 3;
  watermelon.scale = 0.009;
  watermelon.lifetime = 1000;
  watermelongroup.add(watermelon);

}

function createstrawberry(){
  strawberry = createSprite(Math.round(random(displayWidth, 10)), 0, 20, 20);
  strawberry.addImage(strawberryImage);
  strawberry.velocityY = 3;
  strawberry.scale = 0.03;
  strawberry.lifetime = 1000;
  strawberrygroup.add(strawberry);

}

