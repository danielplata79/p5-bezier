var xoff = 0

function setup() {
	createCanvas(windowWidth,windowHeight)
}

function draw() {
	background(0)
	fill(255)
	
	//var x = random(100)
	//var x = noise(100)	
	
	var x = map(noise(xoff),0,1,0,width)

	xoff += 0.009
	console.log("xoff: " + xoff)

	ellipse(x,height/2, 24,24)
}
