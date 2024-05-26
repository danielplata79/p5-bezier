// Created by Daniel Plata
// 
// Greetings to Shayde Plata and Tommy Plata - 32
// https://github.com/danielplata79
// https://es.wikipedia.org/wiki/Ruido_Perlin

var inc = 0.009;
var start = 0;
var gen = 0.02;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	noiseDetail(5);	
	noiseInc = createSlider(0.01,0.50,0.02,0);
	noiseInc.position(width/2,height - 50);
	noiseInc.size(80)
}

function draw() {
	gen = noiseInc.value();
	var yoff = start;

	loadPixels();
	for (var x = 0; x < width; x++) {
		var xoff = start;
		for (var y = 0; y < height; y++ ) {
			var index = (x + y * width) * 4;
			var r = noise(xoff,yoff) * 255;
			pixels[index + 0] = 20;
			pixels[index + 1] = r;
			pixels[index + 2] = r;
			pixels[index + 3] = 255;
			
			xoff += inc;
		}
		yoff += inc;
	}
	updatePixels();
	start += gen;
}
