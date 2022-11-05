class Ground {
    constructor(x, y, width, height) {
        var ground_options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,ground_options);
        this.width = width;
        this.height = height;
        World.add(engine.world,this.body);

    }
    display(){
        push()
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop()
    }
}
