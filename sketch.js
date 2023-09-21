function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(140, 173, 217);
  } else {
    fill(145, 140, 217);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
