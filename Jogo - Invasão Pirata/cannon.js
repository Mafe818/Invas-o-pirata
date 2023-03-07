class Cannon{
    constructor(x,y,w,h,angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.image = loadImage("assets/canon.png");
        this.base = loadImage("assets/cannonBase.png");
        //this-apontador do objeto
    }
    show(){
        //console.log(this.angle);
        console.log(this.angle);
        if(keyIsDown(RIGHT_ARROW) && this.angle < 70){
            this.angle = this.angle + 2;
        }
        if(keyIsDown(LEFT_ARROW) && this.angle > 10){
            this.angle = this.angle - 2;
        }
        push();
        imageMode(CENTER);  
        translate(this.x,this.y);  
        rotate(this.angle);
        image(this.image,0,0,this.w,this.h);
        pop();
        image(this.base,70,20,200,200);    
    }
}