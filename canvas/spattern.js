var start = 0;
var inc = 0.01;
//var r,g,b = random(255);

function setup() {
    createCanvas(windowWidth,windowHeight);
    fill(0,100,255);
    strokeX = start;
    stroke(0);
    strokeWeight(noise(strokeX));
    rectMode(CENTER);
}

function draw() {
    background(0);
    let space = 70;
    xoff = start;
    for (x = - 0; x < width; x += space) {
        let yoff = start;
        for (y = 0; y < height; y += space) {
            square(x, y, noise(xoff) * height );
        }

        xoff += inc;
    }

    start += inc;
}