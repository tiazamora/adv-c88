canvas = new fabric.Canvas('myCanvas');
ballY = 0;
ballX = 0;
holeY = 400;
holeX = 800;
block_image_width = 5;
block_image_height = 5;

function load_img() {
    console.log("entering load_img");
    fabric.Image.fromURL("golf-h.png", function(Img) {
        holeObj = Img;
        holeObj.scaleToWidth(50);
        holeObj.scaleToHeight(50);
        holeObj.set({
            top: holeY,
            left: holeX
        });
        console.log("adding hole object")
        canvas.add(holeObj)
    });
    new_image();
    console.log("finished load_img")
}

function new_image() {
    console.log("entering new_image");
    fabric.Image.fromURL("ball.png", function(Img) {
        ballObj = Img;
        ballObj.scaleToWidth(50);
        ballObj.scaleToHeight(50);
        ballObj.set({
            top: ballY,
            left: ballX
        });
        console.log("adding ball object")
        canvas.add(ballObj);
    });
    console.log("finished new_image")
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((ballX == holeX) && (ballY == holeY)) {
        canvas.remove(ballObj);
        document.getElementById("hd3").innerHTML = "You Have Hit The Goal!!!"
        document.getElementById('myCanvas').style.borderColor = "red";
    } else {

        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }
}

function up() {
    if (ballY >= 0) {
        ballY = ballY + block_image_height;
        console.log(" block image height = " + block_image_height);
        console.log("When Up Arrwo is Pressed, X =" + ballX + " , Y= " + ballY);
        canvas.remove(ballObj);
        new_image();
    }
}

function down() {
    if (ballY <= 450) {
        ballY = ballY + block_image_height;
        console.log(" block image height = " + block_image_height);
        console.log("When Down Arrwo is Pressed, X =" + ballX + " , Y= " + ballY);
        canvas.remove(ballObj);
        new_image();
    }
}

function left() {
    if (ballX > 5) {
        ballX = ballX + block_image_width;
        console.log(" block image width = " + block_image_width);
        console.log("When left Arrwo is Pressed, X =" + ballX + " , Y= " + ballY);
        canvas.remove(ballObj);
        new_image();
    }
}

function right() {
    if (ballX <= 1050) {
        ballX = ballX + block_image_width;
        console.log(" block image width = " + block_image_width);
        console.log("When right Arrwo is Pressed, X =" + ballX + " , Y= " + ballY);
        canvas.remove(ballObj);
        new_image();
    }
}