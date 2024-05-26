var inc = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    width = windowWidth;

    angleMode(DEGREES);
}

function draw() {
    background("lightcyan");

    var r = map(cos(frameCount/2), -1,1, 100, 200);
    var g = map(sin(frameCount/2), 0,1,100,200);
    var b = map(cos(frameCount/2), 0,1,100,200);
    stroke(r,g,b);
    noFill();

    for(var i = 0; i < 40; i++) {
        var zCam = cos(frameCount/2 + i * 8);
        translate(20,0,zCam);
        beginShape();
        for(var j = 0; j < 360; j+= 10) {
            let r = i * 8;
            let x = r * cos(j);
            let y = r * sin(j);
            let z = cos(frameCount + i * 8) * 50;

            vertex(x,y, z);
        }
        endShape(CLOSE);
    }
}