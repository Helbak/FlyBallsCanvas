window.onload = function() {

    const controller = new Controller();
    controller.init();

    setInterval(function () {
    controller.ctx.clearRect(0, 0, controller.width, controller.height);

    for (let i = 0; i < controller.balls.length; i++) {
        controller.draw(controller.balls[i]);
        controller.move(controller.balls[i]);
        controller.checkBorder(controller.balls[i]);
        controller.checkHit(controller.balls);
    }

        controller.ctx.strokeRect(0, 0, controller.width, controller.height);
}, 10);

};