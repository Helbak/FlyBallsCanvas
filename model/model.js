function Ball(x,y) {
    this.x = x;
    this.y = y;
    this.xSpeed = (Math.random() * 10) - 5;
    this.ySpeed = (Math.random() * 10) - 5;
    this.colors = ["Red", "Orange", "Yellow", "Green", "Blue",  "Purple"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.radius = 20;
};



