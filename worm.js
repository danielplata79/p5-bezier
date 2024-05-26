var inc = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    widoth = windowWidth;

    angleMode(DEGREES);
}

function draw() {
    background(0);

    rotate(60);

    var r = map(cos(frameCount/2), -1,1, 100, 200);
    var g = map(sin(frameCount/2), 0,1,100,200);
    var b = map(cos(frameCount/2), 0,1,100,200);
    stroke(r,g,b);
    noFill();

    for(var i = 0; i < 20; i++) {
        beginShape();
        for(var j = 0; j < 360; j+= 10) {
            let r = i * 8;
            let x = r * cos(j);
            let y = r * sin(j);

            vertex(x,y);
        }
        endShape(CLOSE);
    }
}