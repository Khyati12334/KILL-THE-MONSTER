
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;

function preload(){
    backgroundImg = loadImage("IMAGES/GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,100,70,70);
    box2 = new Box(800,100,70,70);
    box3 = new Box(800,100,70,70);
    box4 = new Box(800,100,70,70);
    box5 = new Box(800,100,70,70);
    box6 = new Box(800,100,70,70);

    box7= new Box(700, 100, 70, 70);
    box8= new Box(700, 100, 70, 70);
    box9= new Box(700, 100, 70, 70);
    box10= new Box(700, 100, 70, 70);
    box11= new Box(700, 100, 70, 70);
    box12= new Box(700, 100, 70, 70);

    box13 = new Box(600, 100, 70, 70);
    box14 = new Box(600, 100, 70, 70);
    box15 = new Box(600, 100, 70, 70);
    box16 = new Box(600, 100, 70, 70);
    box17 = new Box(600, 100, 70, 70);
    box18 = new Box(600, 100, 70, 70);
    box19 = new Box(600, 100, 70, 70);
    box20 = new Box(600, 100, 70, 70);

    

    ground = new Ground(0, 600, 2500, 25);

    monster = new BadMonster(1100, 500, 200)
   

    superHero = new Hero(200, 200, 80);

    fly = new Fly(superHero.body, {x:300, y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    superHero.display();

    monster.display();

    ground.display();

    fill("white");
    stroke("PINK")
    strokeWeight(10);
    textSize(50)
    text("KILL THE MONSTER", 50, 100)
}

function mouseDragged(){
    Matter.Body.setPosition(superHero.body, {x:mouseX, y:mouseY})
}