// En Memoria de Tommy Andres Plata Garcia
// 9 de Noviembre del 2006 - 4 de Mayo del 2024
// Buen viaje.
//
// Re-creado por Daniel Plata
// Con ayuda de The Code Train

var cols,rows;
var scl = 20;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	
	var w = windowWidth;
	var h = windowHeight;
	cols = w/scl;
	rows = h/scl;
}
function draw() {
	background(0);

	for(var y = 0; y<rows; y++) {
	beginShape(TRIANGLE_STRIP);
		for(var x = 0; x<cols; x++) {
			vertex(x*scl, y*scl);
			vertex(x*scl, (y+1)*scl);
			//rect(x*scl, y*scl, scl, scl);
		}
	endShape();
	}
}
