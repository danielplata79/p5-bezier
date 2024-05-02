let cols; let rows; let size = 100;
let xoff = 0; let yoff = 0;
let arrows = [];

let inc = 0.01;
let fontsize = 40;

function setup() {
	createCanvas(windowWidth, windowHeight);
	cols = height/size;
	rows = width/size;
}

function draw() {
	background(0);
	textSize(fontsize);

	for(let x=0; x<rows; x++) {
		stroke(255,0,0)
		for(let y=0; y<cols; y++) {
			fill(255)
			ellipse(x*size,y*size, size, size);
			fill(0)	
			text("x: "+x, x*size, y*size)
		}
	}
}
