let cols; let rows; let size = 100;
let xoff = 0; let yoff = 0;
let arrows = [];

let inc = 0.01;

function setup() {
	createCanvas(windowWidth, windowHeight);
	cols = height/size;
	rows = width/size;
}

function draw() {
	background(0);

	for(let x=0; x<rows; x++) {
		arrows[x] = [];
		for(let y=0; y<cols; y++) {
		rect(x*size,y*size, size, size);
		}
	}
}
