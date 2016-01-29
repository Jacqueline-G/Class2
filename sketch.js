var value = 0;

function setup(){
  createCanvas(600,600)
}

function draw() {
  fill(value);
  ellipse(70, 70, 100, 100);
  rect(140, 140, 100, 100)
}
function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
  {
    }
}

