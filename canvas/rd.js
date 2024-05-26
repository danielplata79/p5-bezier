let x,y,r,g,b;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
}

function draw() {
	r = random(255);
	g = 0;
	b = random(255);
	x = random(windowWidth);
	y = random(windowHeight)
	noStroke();
	fill(r,g,b,100);
	circle(x,y,24);
}

map(mouseX, 0, 600, 0, 255)
