class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y
        this.r=r
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        // this.body = Bodies.polygon(this.x,this.y,5,this.r/2,options)
        World.add(world,this.body)
        
    }
    display(){
      var ball = this.body.position  
      var angle = this.body.angle
      push()
      translate(ball.x,ball.y)
      rotate(angle)
      strokeWeight(3)
      fill("yellow")
      ellipseMode(RADIUS)
      ellipse( 0,0,this.r ,this.r);
    //   regularPolygon( 0,0,5,50);
      pop()
    }
}