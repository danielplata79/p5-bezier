// Docs at https://www.geeksforgeeks.org/p5-js-beziervertex-function/
// Code created by Daniel Plata.

function setup() {
  createCanvas(600,600)
}

function draw() {
  background(0)


  let p1 = { x: 150, y: 350 }
  let p2 = { x: 150, y: 50 }
  let p3 = { x: 400, y: 50 }
  let p4 = { x: 500, y: 350 }

  stroke(255,0,0)
  point(400, 400)

  noFill()
  stroke(255)
  strokeWeight(5)
  beginShape()
  vertex(0, 300)
  bezierVertex(p2.x,p2.y,400,400,width,300)
  bezierVertex(p2.x,p2.y,400,400,width,300)
  endShape()
  fill(255)
  textSize(300)
  text("c1: " + mouseX)
  console.log("width: " + windowWidth)
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