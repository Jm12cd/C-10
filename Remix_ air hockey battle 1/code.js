var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fafad9c6-1b09-4968-8c17-00bc85fafbe3","34c739f9-c01a-4535-afee-2fd9511885ec","5ec33d02-6d9a-4693-9dc5-7ffc636725c0"],"propsByKey":{"fafad9c6-1b09-4968-8c17-00bc85fafbe3":{"name":"144955_1_2013930115746wdaw_8a8afb90-1ed9-4f35-ab47-bb87bcf340cb_grande.jpg_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"30C9G5gxUOmjZdPRSud.dFBoc4D3pE1R","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/fafad9c6-1b09-4968-8c17-00bc85fafbe3.png"},"34c739f9-c01a-4535-afee-2fd9511885ec":{"name":"images (2).jpg_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"ItV8IY6bssA2hLHxHvwJs1W445Oyd0BV","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/34c739f9-c01a-4535-afee-2fd9511885ec.png"},"5ec33d02-6d9a-4693-9dc5-7ffc636725c0":{"name":"images.jpg_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"C6MfVwiL.QAXqu3KBlv_9dAmZri.VKxT","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/5ec33d02-6d9a-4693-9dc5-7ffc636725c0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var goal1=createSprite(200,10,150,10);
goal1.shapeColor="yellow";

var goal2=createSprite(200,380,150,10);
goal2.shapeColor="yellow";



var striker = createSprite(200,200,20,20);
striker.shapeColor="blue";

var playerMallet = createSprite(200,50,80,10);
playerMallet.shapeColor="red";
var computerMallet = createSprite(200,350,80,10);
computerMallet.shapeColor="red";


var gameState = "serve";


var compScore = 0;
var playerScore = 0;


function draw() {
  
  background("green");
  
    drawSprites();


  if (gameState === "serve") {
    textSize(18);
    fill("white")
    text("Pressione espaço para Julgar",120,180);
    computerMallet.x = 200;
    computerMallet.y = 350;
  }
  line(370,0,370,400);
  line(30,0,30,400);
  line(0,360,400,360);
  line(0,40,400,40);
  textSize(18);
  
  text(compScore, 10,225);
  text(playerScore,10,185);
  
    if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  if(keyDown("right")){
     playerMallet.x = playerMallet.x+10;
    
  }
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 5;
   }
  }
  if(keyDown("down")){
    
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+5;
   }
  }
  

  computerMallet.x = striker.x;
  

   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  
  createEdgeSprites();
  striker.bounceOff(edges);
  
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  

  if (keyDown("space") &&  gameState === "serve") {
    serve();
    striker.velocityX = striker.velocityX -1;
    striker.velocityY = striker.velocityY -1;
    gameState = "play";
    
  }

  if(striker.isTouching(goal1) || striker.isTouching(goal2) )
  {
    if(striker.isTouching(goal1))
      { 
        compScore = compScore + 1;
      }
      
      if(striker.isTouching(goal2))
      {
        playerScore = playerScore + 1;
      }
      
      reset();
      gameState = "serve";
  }
  
  
  if (playerScore === 5 || compScore === 5){
    gameState = "end";
    
    textSize(18);
    text("Jogo Acabado!",170,160);
    text("Pressione 'R' para Recomeçar",150,180);
    playerMallet.x = 200;
    playerMallet.y = 40;
  }
  
  
  if (keyDown("r") && gameState === "end") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  drawSprites();
}
function serve() {
  striker.velocityX = 6;
  striker.velocityY = 6;
 
}

function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
