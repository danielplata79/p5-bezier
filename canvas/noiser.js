let start = 0
let inc = 0.01

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)
	noFill()
	stroke('orange')

	beginShape()
	let sinX = start
	for(let x = 0; x < width; x++) {
		let y = noise(sinX) * height
		vertex(x,y)
		sinX += inc
	}
	endShape()
	start += inc
	noLoop()
}
