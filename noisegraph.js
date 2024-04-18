var inc = 0.01
var start = 0

function setup() {
	createCanvas(windowWidth,windowHeight)
}

function draw() {
	background(0)
	noFill()

	// Using random() instead of noise()
	//
	//beginShape()
	//for( var x = 0; x < width; x++ ) {
	//	stroke(255)
	//	vertex(x, random(height))
	//}
	//endShape()
	
	beginShape()
	var xoff = start
	for(var x = 0; x < width; x++) {
		stroke(255)
		//var y = random(height)
		var y = noise(xoff) * height
		//var y = sin(xoff) * height
		vertex(x,y)

		xoff += inc
	}
	endShape()
	
	start += inc
	
	//noLoop()
}
