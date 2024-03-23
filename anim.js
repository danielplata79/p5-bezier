// Docs at https://www.geeksforgeeks.org/p5-js-beziervertex-function/
// Code created by Daniel Plata.

function setup() {
  createCanvas(700,700)
  background(0)
}

function draw() {
  translate(height/2,width/2)
  beginShape()
  vertex(70,20)
  bezierVertex(80,0,80,75,30,75)
  endShape()
}

// bezierVertex( x2, y2, x3, y3, x4, y4 )

/*
  let p1 = { x: 50, y: 150 }; 
  
  // First Control Point 
  let p2 = { x: 140, y: 50 }; 
  
  // Second Control Point 
  let p3 = { x: 400, y: 50 }; 
  
  // Anchor Point 
  let p4 = { x: 400, y: 150 }; 
  
*/