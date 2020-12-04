class Bin {
      constructor(){
           this.image=loadImage("dustbingreen.png")
           this.leftWall=Bodies.rectangle(1050,600,10,100,{isStatic:true});
           this.rightWall=Bodies. rectangle(1250,600,10,100,{isStatic:true});
           this.bottomWall=Bodies. rectangle(1100,650,200,10,{isStatic:true});
           World.add(world,this.leftWall);
           World.add(world,this.rightWall);
           World.add(world,this.bottomWall);
        }    
 display(){
    imageMode(CENTER)
     
    image(this.image,1100,620,100,100)
 }
}


