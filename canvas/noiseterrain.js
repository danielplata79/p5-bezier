// En Memoria de Tommy Andres Plata Garcia
// 9 de Noviembre del 2006 - 4 de Mayo del 2024
// Buen viaje.
//
// Re-creado por Daniel Plata
// Con ayuda de The Code Train

var cols,rows;
var scalar = 20;
var w,h;
var xoff,yoff;
var go = 0;

w = 600;
h = 700;

var landscape = [];

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	
	cols = w/scalar;
	rows = h/scalar;
	
	xoff = 0;
	for(var x = 0; x < cols; x++) {
		landscape[x] = [];
		yoff = 0;
		for(var y = 0; y < rows; y++) {
			landscape[x][y] = map(noise(xoff,yoff),0,1,-150,150);
			yoff += 0.1;
		}
		xoff += 0.1;
	}
}
function draw() {
	go += 0.01;

	xoff = go;
	for(var x = 0; x < cols; x++) {
		landscape[x] = [];
		yoff = 0;
		for(var y = 0; y < rows; y++) {
			landscape[x][y] = map(noise(xoff,yoff),0,1,-150,150);
			yoff += 0.1;
		}
		xoff += 0.1;
	}

	background(0);
	orbitControl();
	stroke(255);
	noFill();
	
	translate(width/2, height/2);
	rotateX(PI/3);
	
	frameRate(60);
	
	translate(-w, -h+450, w/1.2);

	for(var y = 0; y< rows-1; y++) {
	beginShape(TRIANGLE_STRIP);
		for(var x = 0; x<cols; x++) {
			vertex(x*scalar, y*scalar, landscape[x][y]);
			vertex(x*scalar, (y+1)*scalar, landscape[x][y+1]);
		}
	endShape();
	}
}