let col

function setup() {
	createCanvas(600,400)
}
function draw() {
	//col = mouseX
	col = map(mouseX, 0,600,0,255)
	background(col)
	ellipse(mouseX,200,64,64)
}
