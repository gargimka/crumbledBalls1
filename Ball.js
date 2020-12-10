class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false, 
            restitution :0.3,
            density:1.2,
            friction :0.5
           }
    
        //this.width=width;
        //this.height=height;
        this.radius=radius;
        //Matter.Bodies.circle(x,y,radius)
        World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
    
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("yellow");
        stroke("red");
        strokeWeight(5);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    
    }
    
    }