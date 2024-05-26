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
	stroke(rR,g,b,255)
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
    //console.log("x: " + x)
    //console.log("y: " + y)
	const touch = floor(random(1));
	
	switch(touch) {
		case 0:
			rR=0
			g=random(255)
			b=random(100)
		break;
	}
}

function mouseClicked() {
	const touch = floor(random(3));
	
	switch(touch) {
		case 0:
			rR=random(255)
			g=0
			b=random(255)
		break;
		case 1:
			rR=0
			g=255
			b=0
		break;
		case 2:
			rR=0
			g=0
			b=255
		break;
	}

	console.log("touch: "+touch)
}
