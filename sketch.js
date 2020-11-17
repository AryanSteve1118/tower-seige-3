const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var score;
function setup() {
  createCanvas(800,700);
 // createSprite(400, 200,50, 50);
 engine=Engine.create();
 world=engine.world;
 
  ground = new Ground(310,500,215,10)
  //level4 
   block16 = new Block(220,480,30,40)
   block15 = new Block(250,480,30,40)
   block14 = new Block(280,480,30,40)
   block13 = new Block(310,480,30,40)
   block12 = new Block(340,480,30,40)
   block11 = new Block(370,480,30,40)
   block10 = new Block(400,480,30,40)
   //level3
   block9 = new Block(250,440,30,40)
   block8 = new Block(280,440,30,40)
   block7 = new Block(310,440,30,40)
   block6 = new Block(340,440,30,40)
   block5 = new Block(370,440,30,40)
  //level2
  block4 = new Block(280,400,30,40)
  block3 = new Block(310,400,30,40)
  block2 = new Block(340,400,30,40)
  //top
  block1 = new Block(310,360,30,40)
  ball = new Ball(50,480,20)
  
  slingshot = new SlingShot(ball.body,{x:50,y:480})
  score = 0
  Engine.run(engine)
}

function draw() {
  
  background(0);
  //text("SCORE : "+score,750,40)
  ground.display()  
  block16.display();
  block15.display();
  block14.display();
  block13.display();
  block12.display();
  block11.display();
  block10.display();
  block9.display();
  block8.display();
  block7.display();
  block6.display();
  block5.display();
  block4.display();
  block3.display();
  block2.display();
  block1.display();
  ball.display();
  slingshot.display()
  
  fill("lime")
  textSize(20)
  text("SCORE : "+score,680,40)
  block16.score();
  block15.score();
  block14.score();
  block13.score();
  block12.score();
  block11.score();
  block10.score();
  block9.score();
  block8.score();
  block7.score();
  block6.score();
  block5.score();
  block4.score();
  block3.score();
  block2.score();
  block1.score();
 // keyPressed()

 // drawSprites();
}//yes-- now check output ok
// now tell me the anthing is remaining in all classes
// mam the block16 is not displaying}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(ball.body);
  }
}