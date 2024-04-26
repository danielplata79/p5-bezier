let sizes = [];
let cols; let rows; let size = 10;
let xoff = 0; let yoff = 0; let inc = 0.1;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  cols = width/size;
  rows = height/size;
  
}

function draw() {
  background('#24242a');
  xoff = 0;
  for (let i=0; i<cols; i++){
    sizes[i] = [];
    yoff = 0;
    for (let j=0; j<rows; j++){
      sizes[i][j] = map(noise(xoff, yoff, zoff), 0, 1, 0, size*1.7);
      yoff += inc;
      
      //let r = noise(zoff+10) * 255;
      //let g = noise(zoff+55) * 255;
      //let b = noise(zoff+30) * 255;
      let r = 255;
      let g = 0;
      let b = 0;
      
      fill(r, g, b, 100);
      noStroke();
      rect(size/2 + i*size, size/2 + j*size, sizes[i][j], sizes[i][j]);
    }
    xoff += inc;
    zoff += 0.0003;
  }

  
}