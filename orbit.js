function setup() {
    createCanvas(500,500)
    slider = createSlider(0, 255)
    slider.position(50,50)
    slider.size(100)
}

function draw() {
    let c = slider.value()    

    background(c)
}