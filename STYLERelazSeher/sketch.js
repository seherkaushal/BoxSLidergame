const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2;
let pg;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world =engine.world;
  box1 = new Box(10,10,50,50);
  box2 = new Box(0,200,50,50);
  pg = createGraphics(1000,600);

}

function draw() {
  fill(0, 12);
  //*rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  Engine.update(engine);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);
  
  box1.display();
  box2.display();


}
