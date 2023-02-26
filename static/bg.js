const bgCol = '#281701';
const circleCol = { r: 255, g: 237, b: 216, a: 30 };
// 255, 237, 216

const circleSize = 23;
var circles;

var myCanvas = createCanvas(windowWidth, windowHeight);
myCanvas.parent("backgroundCanvas");

function setup() {
    circles = new Array(parseInt(windowWidth / circleSize) + 1);
    for (var i = 0; i < circles.length; i++) {
        circles[i] = new Array(parseInt(windowHeight / circleSize) + 1);
        for (var j = 0; j < circles[i].length; j++) {
            circles[i][j] = { x: i * circleSize, y: j * circleSize, size: circleSize - 1 };
        }
    }
}

function draw() {
    windowResized();
    resizeCircle();
    background(bgCol);
    // circle(mouseX, mouseY, 20);
    for (var i = 0; i < circles.length; i++) {
        for (var j = 0; j < circles[i].length; j++) {
            noStroke();
            var alpha = noise(windowWidth * i, windowHeight * j) * 0.5;
            // console.log(alpha * 100);
            fill(circleCol.r, circleCol.g, circleCol.b, alpha * 100);
            ellipseMode(CORNER);
            ellipse(circles[i][j].x, circles[i][j].y, circles[i][j].size, circles[i][j].size);
        }
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function resizeCircle() {
    for (var i = 0; i < circles.length; i++) {
        for (var j = 0; j < circles[i].length; j++) {
            var siz = dist(circles[i][j].x, circles[i][j].y, mouseX, mouseY) / 5;
            // map(value, start1, stop1, start2, stop2, [withinBounds])
            siz = map(siz, 0, 50, 1, circleSize, true);
            circles[i][j].size = siz;
        }
    }
}