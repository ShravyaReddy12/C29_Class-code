class Ground {
    
    //properties
    constuctor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;

        World.add(world, this.body);
        console.log(this.body);
    }


    //functions
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("grey");
        rect(pos.x,pos.y,this.w,this.h);
        pop()
    
    }
}