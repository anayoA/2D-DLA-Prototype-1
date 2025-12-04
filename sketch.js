// move walker randomly
// if walker leaves canvas -> respawn walker on edge
// if walker touches tree -> add to tree, respawn
// draw



const tree = [];
const radius = 4;


function setup() {
  createCanvas(400, 400);
  tree[0] = createVector(width / 2, height / 2); // point in the middle of the window
  x = random(0, width);
  y = random(0, height);
  walker = createVector(x, y);

}

function draw() {
  background(0);

  point(walker.x, walker.y);

  for (let i = 0; i < tree.length; i++) {
    strokeWeight(radius);
    stroke(255);
    point(tree[i].x, tree[i].y);
  }
}

function spawnWalkerOnEdge() {
  // left: x = 0, y = random
  // right: x = width, y = random
  // top: x = random, y = 0
  // bottom: x = random, y = height
  const edges = ["left", "right", "top", "bottom"];
  let chosenEdge = random(edges);

  if (chosenEdge == "left") {

  }
  else if (chosenEdge == "right") {

  }
  else if (chosenEdge == "top") {

  }
  else {

  }

}

function moveWalker() {

}
function checkSticking() {

}