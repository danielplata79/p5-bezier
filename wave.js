var inc = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background("#24242a");
    orbitControl();

    rotateX(60);

    noFill();
    //stroke(255, 0,0);

    for(var i = 0; i < 20; i++) {
        var r = map(sin(frameCount/ 2), -1, 1, 100, 200);
        var g = map(i, 0, 20, 100, 200);
        var b = map(cos(frameCount), -i, 1, 200, 100);

        stroke(r,g,b);

        rotate(inc);

        beginShape();
        for(var j = 0; j < 360; j+= 90) {
            var rad = i * 8;
            var x = rad * cos(j);
            var y = rad * sin(j);
            var z = cos(frameCount + i * 10) * 50;

            inc += 0.0001;
            vertex(x,y,z)
        }

        endShape(CLOSE);
    }
}