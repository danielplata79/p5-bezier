var inc = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES)
  
  var width = windowWidth
}

function draw() {
  background("#24242a");
  
  var r = map(sin(frameCount/2), -1, 1, 50,200)
  var g = map(sin(frameCount/3), -1, 1, 10,200)
  var b = map(cos(frameCount/6), -1, 1, 50, 255)
  
  noFill()
  strokeWeight(2)
  stroke(r,g,b)
  
  translate(0,0,width/2 + 120)
  
  for(i = 0; i < 60; i++) {
    beginShape()
    rotate(inc)
    
    for(j = 0; j < 360; j+= 60) {
      var rad = i * 4
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount + i * 7) * 100;
      
      vertex(x,y,z)
      inc += 0.00001;
    }
    endShape(CLOSE)
  }
}