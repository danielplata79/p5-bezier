var inc = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  width = windowWidth
}

function draw() {
  background("#24242a");
  orbitControl()
  

  
  noFill()
  
  //rotateX(60)
  
  translate(0,0,width/2+200)
  
  for(var i = 0; i < 20; i++) {
    beginShape()
     var r = map(sin(frameCount/50), -1, 1, 50,200)
  var g = map(sin(frameCount/50), -1, 1, 10,200)
  var b = map(cos(frameCount/50), -1, 1, 50, 255)
    //stroke(50,60,200)
  stroke(r,g,b)
    strokeWeight(0.09)
    //strokeWeight()

    for(var j = 0; j < 360; j+= 5) {
      var r = i * 8;
      var x = r * cos(j);
      var y = r * sin(j);
      //var z = cos(frameCount/2+ i ) * 150
      
      rotate(inc)
      vertex(x,y)
      inc += 0.000000001;
    }
    endShape(CLOSE)
  }
}