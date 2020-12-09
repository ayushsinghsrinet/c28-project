class Slingshoot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 100
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        
    }
fly(){
   this.sling.bodyA=null;
}
attach(body){
    Matter.Body.setPosition(stoobj.body,{x:100,y:100})
    this.sling.bodyA=body;
}
    display(){

    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}