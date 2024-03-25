// Docs at https://www.geeksforgeeks.org/p5-js-beziervertex-function/
// Code created by Daniel Plata.

function setup() {
  createCanvas(600,600,WEBGL)
}

function draw() {
  orbitControl()
  background(0)

  stroke('blue')
  strokeWeight(50)
  point(400,400)
  point(400,200)
  point(150,300)

  let p1 = { x: 150, y: 350 }
  let p2 = { x: 150, y: 50 }
  let p3 = { x: 400, y: 50 }
  let p4 = { x: 500, y: 350 }

  fill('red')
  rotateX(frameCount * 0.05)
  rotateY(frameCount * 0.01)
  noStroke()
  beginShape()
  vertex(400,400,[500])
  vertex(400,200,[500])
  vertex(150,300,[500])
  endShape()

  /* stroke(255,0,0)
  point(400, 400)

  fill(255,255,10)
  stroke(255)
  strokeWeight(5)
  beginShape()
    vertex(0, 300)
  bezierVertex(200,0,400,0,600,600)
  bezierVertex(200,0,400,0,600,600)
  endShape()
  textSize(300)
  text("c1: " + mouseX)
  console.log("width: " + windowWidth) */
}

/*
  bezierVertex( x2, y2, x3, y3, x4, y4 )

  let p1 = { x: 50, y: 150 }; 
  
  // First Control Point 
  let p2 = { x: 140, y: 50 }; 
  
  // Second Control Point 
  let p3 = { x: 400, y: 50 }; 
  
  // Anchor Point 
  let p4 = { x: 400, y: 150 }; 
  
*/