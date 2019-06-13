function Controller() {
    this.i = 0;
    this.balls = [];
    this.width = 800;
    this.height = 300;
    // this.reDrawer();

};

Controller.prototype.init = function () {
    const canvas = document.getElementById('c1');
    this.ctx = canvas.getContext('2d');
    canvas.onmousedown = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        this.newClick(x, y);
    }.bind(this);

};


Controller.prototype.newClick = function (x, y) {
    if(this.checkFirst(x,y)===true){
    for(let i=0; i<3; i++){
        this.balls[this.i] = new SmallBall(x,y);
        this.draw(this.balls[this.i]);
        this.i++;
    }
    }
    this.balls[this.i] = new Ball(x, y);
    this.draw(this.balls[this.i]);
    this.i++;

};

Controller.prototype.draw = function (ball) {
    this.ctx.fillStyle = ball.color;
    this.circle(ball, true);
};

Controller.prototype.circle = function (ball, fillCircle) {
    this.ctx.beginPath();
    this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        this.ctx.fill();
    } else {
        this.ctx.stroke();
    }
};
Controller.prototype.move = function (ball) {
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
};

Controller.prototype.checkBorder = function (ball) {
    if (ball.x < 0 || ball.x > this.width) {
        ball.xSpeed = -ball.xSpeed;
    }
    if (ball.y < 0 || ball.y > this.height) {
        ball.ySpeed = -ball.ySpeed;
    }
};
Controller.prototype.checkHit = function (balls) {
    for (let i = 0; i < balls.length; i++) {
        let oneBall = balls[i];
        let bordX = oneBall.x;
        let bordY = oneBall.y;
        for (let j = 0; j < balls.length; j++) {
            if (i !== j) {
                let twoBall = balls[j];
                let twoBordX = twoBall.x;
                let twoBordY = twoBall.y;
                if (twoBordX - 10 < bordX && twoBordX + 10 < bordX && twoBordY - 10 < bordY && twoBordY + 10 < bordY) {
                    oneBall.ySpeed = -oneBall.ySpeed;
                    twoBall.ySpeed = -twoBall.ySpeed;
                }

            }
        }
    }
};

Controller.prototype.checkFirst = function (bordX, bordY) {
    for (let j = 0; j < this.balls.length; j++) {
        let twoBall = this.balls[j];
        let twoBordX = twoBall.x;
        let twoBordY = twoBall.y;
        if (twoBordX - 10 < bordX && twoBordX + 10 < bordX && twoBordY - 10 < bordY && twoBordY + 10 < bordY) {
            // this.balls.splice(j, 1);
            return true;
        }
        }
    };


