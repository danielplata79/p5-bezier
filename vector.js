let x;
let y;
let inc = 15;
let color;
var rR = 255;
let g,b;

function setup() {
    createCanvas(windowWidth,windowHeight)
    x = width / 2
    y = height / 2
    background(0)
}
function draw() {
    stroke(0,255,0,100)
    strokeWeight(2)
    point(x,y)   
    const r = floor(random(4))
    switch (r) {
        case 0:
            x += inc;
        break;

        case 1:
            x -= inc;
        break;

        case 2:
            y += inc;
        break;

        case 3:
            y -= inc;
        break;
    }

    if (x > width || x < 0 ) {
        x = width / 2
        stroke(0,0,255,0)
    } if (y > height || y < 0) {
        y = height / 2
        stroke(255,0,0,100)
    }
    console.log("x: " + x)
    console.log("y: " + y)
}