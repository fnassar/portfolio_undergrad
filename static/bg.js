const bgCol = "#281701";
const circleCol = { r: 255, g: 237, b: 216, a: 30 };
// 255, 237, 216

const circleSize = 23;
var circles;

var myCanvas = function (p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        // p.background(bgCol);
        circles = new Array(parseInt(p.windowWidth / circleSize) + 1);
        for (var i = 0; i < circles.length; i++) {
            circles[i] = new Array(parseInt(p.windowHeight / circleSize) + 1);
            for (var j = 0; j < circles[i].length; j++) {
                circles[i][j] = {
                    x: i * circleSize,
                    y: j * circleSize,
                    size: circleSize - 1,
                };
            }
        }
        p.frameRate(8);
    };
    p.draw = function () {
        // p.windowResized();
        p.resizeCircle();
        p.background(bgCol);
        // circle(mouseX, mouseY, 20);
        for (var i = 0; i < circles.length; i++) {
            for (var j = 0; j < circles[i].length; j++) {
                p.noStroke();
                var alpha =
                    p.noise(p.windowWidth * i, p.windowHeight * j) * 0.5;
                // console.log(alpha * 100);
                p.fill(circleCol.r, circleCol.g, circleCol.b, alpha * 100);
                p.ellipseMode(p.CORNER);
                p.ellipse(
                    circles[i][j].x,
                    circles[i][j].y,
                    circles[i][j].size,
                    circles[i][j].size
                );
            }
        }
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.resizeCircle = function () {
        for (var i = 0; i < circles.length; i++) {
            for (var j = 0; j < circles[i].length; j++) {
                var siz =
                    p.dist(
                        circles[i][j].x,
                        circles[i][j].y,
                        p.mouseX,
                        p.mouseY
                    ) / 5;
                // map(value, start1, stop1, start2, stop2, [withinBounds])
                siz = p.map(siz, 0, 50, 1, circleSize - 1, true);
                circles[i][j].size = siz;
            }
        }
    };
};

new p5(myCanvas, "background");
