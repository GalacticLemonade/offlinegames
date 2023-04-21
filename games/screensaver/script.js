// animation

var x = 10;
var y = 100;

var xupdate = 2;
var yupdate = 1;

var canvasWidth;
var canvasHeight;

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);
  noScroll();
}

function draw() {
  // background(200);

  rect(x, y, 50, 50);
  x += xupdate;
  y += yupdate;

  if (x > canvasWidth || x <= 0) {
    xupdate *= -1;
  }

  if (y > canvasHeight || y <= 0) {
    yupdate *= -1;
  }
}

function noScroll() {
  // Disable scrolling on the page
  document.body.style.overflow = 'hidden';
}

function windowResized() {
  // Update canvas dimensions when window is resized
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}

function keyPressed() {
  // Hide cursor when space key is pressed
  if (key == ' ') {
    noCursor();
  }
}