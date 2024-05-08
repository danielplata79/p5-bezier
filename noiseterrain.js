// En Memoria de Tommy Andres Plata Garcia
// 9 de Noviembre del 2006 - 4 de Mayo del 2024
// Buen viaje.
//
// Re-creado por Daniel Plata
// Con ayuda de The Code Train

var cols,rows;
var scalar = 20;
var w,h;

//float[][] terrain;
var landscape = [];

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	
	w = windowWidth;
	h = windowHeight;
	cols = (w/1.5)/scalar;
	rows = (h/1.5)/scalar;
	
	//landscape = [cols][rows];
	//for(var y = 0; y < rows; y++) {
	//	for(var x = 0; x < cols; x++) {
	//		landscape[x][y] = random(-10, 10);
	//	}
	//}
}
function draw() {
	background(0);
	orbitControl();
	stroke(255);
	noFill();
	
	translate(width/2, height/2);
	rotateX(PI/3);
	
	frameRate(1);
	
	translate(-w/1.3, -h);

	for(var y = 0; y<rows-1; y++) {
	beginShape(TRIANGLE_STRIP);
		for(var x = 0; x<cols; x++) {
			vertex(x*scalar, y*scalar, random(-100,100));
			vertex(x*scalar, (y+1)*scalar, random(-100,100));
		}
	endShape();
	}
}
