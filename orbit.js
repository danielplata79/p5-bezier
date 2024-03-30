//
// Docs at https://www.geeksforgeeks.org/p5-js-orbitcontrol-function/
//

let newFont;
let orbitControlEnable = false;

function preload() {
    newFont = loadFont('assets/JetBrains Mono Regular Nerd Font Complete Mono.ttf')
}

function setup() {
    createCanvas(600,600,WEBGL)
    textFont(newFont, 18)

    xSensivitySlider = createSlider(0, 5, 1, 0.1)
    xSensivitySlider.position(20, 50)

    ySensivitySlider = createSlider(0, 5, 1, 0.1)
    ySensivitySlider.position(20,100)

    zSensivitySlider = createSlider(0, 5, 1, 0.1)
    zSensivitySlider.position(20, 150)
    
    // camera(0, 0, 50*sqrt(3), 0, 0, 0, 0, 1, 0);
    // perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3));
}

function draw() {
    background(0)

    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);

    fill(255)
    textSize(30)
    text("xSensivitySldier value: " + xSensivitySlider.value(), 0, 300)


    xSensivity = xSensivitySlider.value()
    ySensivity = ySensivitySlider.value()
    zSensivity = zSensivitySlider.value()

    orbitControl(xSensivity,ySensivity,zSensivity)
 
	for (i = 0;i < 10; i++) {
		sphere(50)		
	}
    box(50)
}
