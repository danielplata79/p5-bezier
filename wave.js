function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background("#24242a");
    orbitControl();

    rotateX(60);

    noFill();
    stroke(255);

    for(var i = 0; i < 20; i++) {
        beginShape();
        for(var j = 0; j < 360; j+= 10) {
            var rad = i * 8;
            var x = rad * cos(j);
            var y = rad * sin(j);
            var z = cos(frameCount + i * 10) * 50;

            vertex(x,y,z)
        }
        endShape(CLOSE);
    }
}