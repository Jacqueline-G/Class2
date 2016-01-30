function setup () {
  createCanvas(480,400);
}

function draw() {
  background(210, 20, 200)
  for (var x = 12; x <= width; x = x + 15) {
    for (var y = 31; y < height; y = y + 8) {
      new EllipseMove(x,y, mouseMoves())
    }
  }
}

var EllipseMove = function(x,y) {
  ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
}

function mouseMoves() {
  ellipse(mouseX, mouseY, pmouseX, pmouseY) ;
}