var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var Cbell, pcgroup, rcgroup, ycgroup
var pinkImg, yellowImg, redImg,gameoverImg


var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  pinkImg=loadAnimation( "opponent1.png","opponent2.png")
  yellowImg=loadAnimation("opponent4.png","opponent5.png")
  redImg=loadAnimation("opponent7.png","opponent8.png")

  gameoverImg=loadImage("gameOver.png")
  
}

 function pinko(){
   opponent1=createSprite(350,Math.round(random(50,250), 10,10))
   opponent1.scale=0.06
   opponent1.addAnimation("pink",pinkImg)
   opponent1.setLifetime=200;
   pcgroup.add(opponent1);
   opponent1.velocityX=-(6+2*distance/150)
   
 }

function yellowo(){
   opponent2=createSprite(400,Math.round(random(50,250), 10,10))
   opponent2.scale=0.06
   opponent2.addAnimation("yellow",yellowImg)
   opponent2.setLifetime=170;
     opponent2.velocityX=-(6+2*distance/150)
   ycgroup.add(opponent2);
  
   
 }

function redo(){
   opponent3=createSprite(300,Math.round(random(50,250), 10,10))
   opponent3.scale=0.06
   opponent3.addAnimation("red",redImg)
   opponent3.setLifetime=220;
     opponent3.velocityX=-(6+2*distance/150)
   rcgroup.add(opponent3);
   
 }

function setup(){
  
createCanvas(1500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -(6+2*distance/150)

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
    mainCyclist.VelocityX=9
  
  gameover=createSprite(300,150)
  gameover.addImage("done",gameoverImg)
  gameover.visible=false
  
 pcgroup=new Group();
  ycgroup=new Group();
rcgroup=new Group();
  

  
  gameState=PLAY;
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30); 
  
  if(gameState===PLAY){
    var allopponents=Math.round(random(1,3));
   if(World.frameCount%150===0){
    if(allopponents===1){
      pinko();
    }else if(allopponents===2){
      yellowo();
    }else if(allopponents===3){
      redo();
    }
    }
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  
 
  }
    distance=distance+Math.round(getFrameRate()/50)
    if(mainCyclist.collide(pcgroup)||mainCyclist.collide(ycgroup)||mainCyclist.collide(rcgroup)){
     gameState=0
    }
    }
    
  if(gameState===END){
    mainCyclist.velocityX=0
    path.velocityX=0
    pcgroup.velocity=0
    rcgroup.velocityX=0
    ycgroup.velocityX=0
    gameover.visible=true
    
  }
}


