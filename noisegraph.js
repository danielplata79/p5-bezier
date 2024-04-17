var xoff1 = 0
var xoff2 = 10000
//var yoff = 0

function setup() {
	createCanvas(windowWidth,windowHeight)
}

function draw() {
	background(0)
	fill(255)
	
	//var x = random(100)
	//var x = noise(100)	
	
	var x = map(noise(xoff1),0,1,0,width)
	var y = map(noise(xoff2),0,1,0,height)

	xoff1 += 0.02
	xoff2 += 0.02
	//yoff += 0.01

	console.log("xoff1: " + xoff1)
	console.log("xoff2: " + xoff2)

	ellipse(x,y, 24,24)
}
