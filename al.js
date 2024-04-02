let newFont;
let currentLightColor = "red";
let currentAmbientColor = "red";

function preload() {
    newFont = loadFont('assets/JetBrains Mono Regular Nerd Font Complete Mono.ttf')
}

function setup() {
	createCanvas(windowWidth,windowHeight,WEBGL)

	 graySlider = createSlider(0, 128, 64, 1); 
	 graySlider.position(20, 50); 
}

function draw() {
	noStroke()
	fill(255,0,0,210)
	orbitControl()
	background(0)

	shininess(15)
	pointLight(0, 0, 255, -width / 2, -height / 2, 250)
	grayValue = graySlider.value()
	ambientLight(grayValue, 0, 0)
	specularMaterial(250)
	sphere(100)	
}