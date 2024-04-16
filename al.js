  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 ----------- width/2,-height/2
  //                   |           |
  //                   |    0,0    |
  //                   |           |
  //  -width/2,height/2 ----------- width/2,height/
let newFont;
let currentLightColor = "red";
let currentAmbientColor = "red";

function preload() {
    newFont = loadFont('assets/JetBrains Mono Regular Nerd Font Complete Mono.ttf')
	textureEarth = loadImage("./earth2.jpg")
	textureMoon = loadImage("./moon.jpg")
}

function setup() {
	createCanvas(windowWidth,windowHeight,WEBGL)

	// graySlider = createSlider(0, 128, 64, 1); 
	// graySlider.position(20, 50); 
}

function draw() {
	noStroke()
	
	orbitControl()
	background(0)

	// ambientLight()
	shininess(80)
	pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 300 )
	ambientLight(200, 200, 200)
	rotateY(millis() / 2000)
	//normalMaterial()
	texture(textureEarth)
	torus(80,20,64,64)
	sphere(250)		

	//translate(-width/2, -height/2)
	translate(1000,0)
	fill(200,200,200)
	pointLight(250,250,255, 0,0, 500)
	ambientLight(0,0,0)
	texture(textureMoon)
	rotateY(millis() / 1800)
	sphere(50)
}
