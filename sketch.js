const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

const Constraint = Matter.Constraint;
var engine,world;

var ground;
 var backimg;
 var tree,treeimg;
 var boy,boyimg;
 var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
 var t;
var stoobj;
function preload(){
backimg=loadImage("c28img.jpg")
boyimg=loadImage("do.png")
treeimg=loadImage("tree.png")
}
function setup(){
var canvas=createCanvas(1000,600)
engine=Engine.create();
world=engine.world;

lmango1=createSprite(200,540,20,20)


boy=createSprite(200,500,20,20)
boy.addImage(boyimg)
boy.scale=0.5

tree=createSprite(700,300,10,10);
tree.addImage(treeimg);
tree.scale=0.5
var gsto={
    isStatic:true,
    
}
ground=Bodies.rectangle(500,597,1000,10,gsto);
World.add(world,ground);
stoobj=new stone(200,200,20)


//g=Bodies.rectangle(500,300,10,10);
//World.add(world,g);


mango1=new mango(500,200,60,60);
mango2=new mango(600,300,40,40);
mango3=new mango(700,100,80,80);
mango4=new mango(700,300,60,60);
mango5=new mango(800,200,60,60);
mango6=new mango(900,300,50,50);
mango7=new mango(900,150,70,70);
t=new Slingshoot(stoobj.body,{x:255,y:498})
}


function draw(){
    background(backimg);
    drawSprites();
    Engine.update(engine)
  mango1.display()

   // rectMode(CENTER)
    //rect(g.position.x,g.position.y,10,10)
    rectMode(CENTER)
    fill("brown");
    rect(ground.position.x,ground.position.y,1000,20)
    strokeWeight(4)

    stoobj.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display()
t.display()

detectollision(stoobj,mango1);
detectollision(stoobj,mango2);
detectollision(stoobj,mango3);
detectollision(stoobj,mango4);
detectollision(stoobj,mango5);
detectollision(stoobj,mango6);
detectollision(stoobj,mango7);
}

function mouseDragged(){
    Matter.Body.setPosition(stoobj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
t.fly();
}
function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
  
    
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if (distance<=lmango.width+lstone.r)
   {
     Matter.Body.setStatic(lmango.body , false);
   } 
  }

  
  function keyPressed(){
    if(keyCode===32){
        t.attach(stoobj.body);
       
    }
}
  
    
