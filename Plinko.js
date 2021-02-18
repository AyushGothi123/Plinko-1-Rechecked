class Plinko {
    constructor(x,y,r){
        var options={


    }
    this.body = Bodies.circle(x,y,r,options)
    this.r = r;
    World.add(world,this.body);
    




    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        
        ellipse(pos.x,pos.y,this.r)
        for (var j = 40; j <= width; j= j+50) {

            plinkos.push(new Plinko(j,75))
        }
        for (var i = 40; j <= width; j= j+50) {

            plinkos.push(new Plinko(j,75))
        }


            
            
        






    }







}