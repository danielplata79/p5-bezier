var inc = 0.01
var start = 0

function setup() {
	createCanvas(windowWidth,windowHeight)
}

function draw() {
	background(0)
	noFill()

	beginShape()
	var xoff = start
	for(var x = 0; x < width; x++) {
		stroke(255)
		var y = noise(xoff) * height
		vertex(x,y)
		xoff += inc
	}
	endShape()
	
	start += inc
}
