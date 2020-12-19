class Paper{
    constructor(x, y) {
        var options= {
            'isStatic' : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 10, options); 
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        push();
        var angle = this.body.angle;
        var pos =this.body.position;
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        ellipse(0,0,20,20);
        imageMode(CENTER);
        image(this.image, 0, 0, 25, 25);
        pop();
    }
}