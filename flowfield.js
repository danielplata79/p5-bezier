// Created by Daniel Plata
//
// https://github.com/danielplata79

var num = 1000;
var noiseScale = 500, noiseStrength= 1;
var particles =[num];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke()
	background(0);
	
	for(let x = 0; x < num ; x++) {
		var y = createVector(random(width*1.2), random(height), random(4));
		var angle = 0;
		var dir = createVector(cos(angle), sin(angle));
		var speed = random(0.5, 2);

		particles[x] = new Particle(y, dir, speed);
	};
};

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
};

function draw() {
	//background(20);
	fill(0,10);
	noStroke();
	rect(0,0, width, height);
	
	for(let i = 0; i < particles.length; i++) {
		particles[i].run();
	};
};

class Particle {
	constructor(_y, _dir, _speed){
		this.y = _y;
		this.dir = _dir;
		this.speed = _speed;
	};

	run() {
		this.move();
		this.checkEdges();
		this.update();
	};

	move() {
		let angle = noise(this.y.x/noiseScale, this.y.y/noiseScale, frameCount/noiseScale) * TWO_PI * noiseStrength;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		var vel = this.dir.copy();
		var d = 1;
		vel.mult(this.speed * d);
		this.y.add(vel);
	};

		checkEdges() {
			if(this.y.x < 0 || this.y.x > width || this.y.x < 0 || this.y.y > height) {
				this.y.x = random(width * 1.2);
				this.y.y = random(height);
			};
		};

		update() {
			fill(255, 0,0,random(255));
			ellipse(this.y.x, this.y.y, this.y.z);
		};
};


