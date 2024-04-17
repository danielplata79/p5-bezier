let theShader;

function preload(
	theShader = loadShader('shader.vert', 'shader.frag')
)

function setup(
	createCanvas(windowWidth,windowHeight,WEBGL)
	noStroke()
)

function draw(
	shader(theShader)
	rect(0,0,width,height)
)
