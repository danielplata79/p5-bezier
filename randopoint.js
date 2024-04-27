let start = 0; let inc = 0.01;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	let x = random(width);
	let y = random(height);
	let z = random(height);

	strokeWeight(3);
	stroke(255);
	//point(noise(xoff) * width, noise(yoff) * height);	
	point(x,y,z);
	
	x += inc;
}
