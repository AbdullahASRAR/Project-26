class Paper {
    constructor(x,y,radius){
        
        this.image=loadImage("paper.png")
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius);
        World.add(world,this.body);
     }
 display(){
  imageMode(CENTER) 
  fill ("pink");
  image(this.image,this.body.position.x,this.body.position.y,50,50)

 }
}
