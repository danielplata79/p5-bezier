let sizes = [];
let cols; let rows; let size = 7;
let xoff = 0; let yoff = 0; let inc = 0.1;
let zoff = 0;

function setup () {
    createCanvas(windowWidth, windowHeight);

    rectMode(CENTER);
    cols = width/size;
    rows = height/size;
}

function draw() {
    background(0,200,50,250);

    xoff = 0;
    for(let y=0; y<cols; y++) {
        sizes[y] = [];
        yoff = 0;
        for(let x=0; x<rows; x++) {
            sizes[y,x] = map(noise(xoff, yoff, zoff),0 ,1 ,0, size*1.9);
            yoff += inc;

            fill(200, 255, 100, 250)
            noStroke();
            rect(size/2 + y*size, size/2 + x*size, sizes[y][x], sizes[x][y]);
        }

        xoff += inc;
        zoff += 0.00001;
    }
}