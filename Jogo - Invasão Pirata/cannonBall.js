class CannonBall{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 30;
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
        
        this.image = loadImage("assets/cannonball.png");
        //this-apontador do objeto
    }
    show(){
        push();
        imageMode(CENTER);  
        translate(this.x,this.y);  
        image(this.image,0,0,this.r,this.r);
        pop(); 
    }
    shoot(){
        console.log(this.body.isStatic);
        Matter.Body.setStatic(this.body,false);
        console.log(this.body.isStatic);
        Matter.Body.setVelocity(this.body,{x:30,y:-20});
    }
}