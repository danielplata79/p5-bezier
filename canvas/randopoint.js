var stars = [];
var speed;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	for (var b =0;b < 800; b++ ) {
		stars[b] = new Star();
	}
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
}

function draw() {
	speed = map(mouseX, 0, width, 0, 50);
	background(0);
	translate(width / 2 , height / 2);

	for(var j = 0; j < stars.length; j++) {
		stars[j].update();
		stars[j].show();
	}
}

function Star() {
	this.x = random(-width, width);
	this.y = random(-height, height);
	this.z = random(width);
	this.pz = this.z;

	this.update = function() {
		this.z = this.z - speed;
		if (this.z < 1) {
			this.z = width; 
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.pz = this.z;
		}
	}

	this.show= function() {
		fill(255);
		noStroke();

		var sx = map(this.x / this.z, 0, 1, 0, width);
		var sy = map(this.y / this.z, 0, 1, 0, height);

		var r = map(this.z, 0, width, 16, 0);
		ellipse(sx, sy, r, r);

		var px = map(this.x / this.pz, 0, 1, 0, width);
		var py = map(this.y / this.pz, 0, 1, 0, height);

		this.pz = this.z;
		stroke(255);
		point(px, py);
	}
}