
const colour = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(249, 235, 245); // pink
  textFont('Courier New', 28);
  fill(0);
  textAlign(LEFT);
  text('Click around to see different shapes!', 20, 50);

  
}

function draw() {
 
}
  

function mouseClicked() {
  const r = int(random(1,5));
    // text(r, mouseX, mouseY, [500], [500]);
  
    switch (r) {
      
      case 1:
        fill(140, 173, 217); 
        ellipse(mouseX, mouseY, 80, 80);
        break;
      case 2:
        fill(145, 140, 217); 
        rect(mouseX, mouseY, 80, 80);
        break;
      case 3:
        fill(186, 44, 134); 
        triangle(mouseX, mouseY-40, mouseX, mouseY+40, mouseX+80 , mouseY+40);
        break;
      case 4:
        fill(75, 141, 185); 
        triangle(mouseX, mouseY-40, mouseX, mouseY+40, mouseX-80 , mouseY+40);
        break;
      default:
        fill(140, 173, 217); 
        ellipse(mouseX, mouseY, 80, 80);
        break;
    }

  return false;
}
