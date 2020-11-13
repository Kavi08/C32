class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.picture = loadImage("sprites/smoke.png");
    this.path = [];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    //console.log(this.body.velocity.x);
    //console.log(this.body.position.x);
    if(this.body.velocity.x > 10 && this.body.position.x > 250 ){
      var position = [];
      position = [this.body.position.x, this.body.position.y];
      this.path.push(position);
    }
    
    //console.log(position);
    for(var i = 0; i < this.path.length; i++){
      image(this.picture, this.path[i][0], this.path[i][1]);
    }
    super.display();
  }
}
