// move walker randomly
// if walker leaves canvas -> respawn walker on edge
// if walker touches tree -> add to tree, respawn
// draw



const tree = [];
const radius = 8;


function setup() {
  createCanvas(400, 400);
  tree[0] = createVector(width / 2, height / 2); // point in the middle of the window
  walker = spawnWalkerOnEdge();
}

function draw() {
  background(0);

  for (let i = 0; i < tree.length; i++) {
    strokeWeight(radius);
    stroke(255);
    point(tree[i].x, tree[i].y);
  }
  stroke(150);
  moveWalker();
  checkSticking();
  point(walker.x, walker.y);
  // console.log("Hello!");
}


function spawnWalkerOnEdge() {
  // left: x = 0, y = random
  // right: x = width, y = random
  // top: x = random, y = 0
  // bottom: x = random, y = height
  const edges = ["left", "right", "top", "bottom"];
  let chosenEdge = random(edges);
  let x;
  let y;
  if (chosenEdge == "left") {
    x = 0;
    y = random(0, height);
  }
  else if (chosenEdge == "right") {
    x = width
    y = random(0, height);

  }
  else if (chosenEdge == "top") {
    x = random(0, width);
    y = 0;
  }
  else {
    x = random(0, width);
    y = height;
  }
  return createVector(x, y);
}

function moveWalker() {
  const vel = 100;
  let dx = random(-vel, vel);
  let dy = random(-vel, vel);

  walker.x += dx;
  walker.y += dy;

  walker.x = constrain(walker.x, 0, width);
  walker.y = constrain(walker.y, 0, height);
}
function checkSticking() {
  let distance;

  for (let i = 0; i < tree.length; i++) {

    distance = dist(walker.x, walker.y, tree[i].x, tree[i].y);

    if (distance < radius * 2) {
      // stop walker in its tracks
      tree.push(walker);
      // spawn new walker
      walker = spawnWalkerOnEdge();
      return true;
    }

    return false;

  }

}