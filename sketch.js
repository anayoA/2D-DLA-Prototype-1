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
  moveWalker();
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
  let dx = random(-1, 1);
  let dy = random(-1, 1);

  walker.x += dx;
  walker.y += dy;

}
function checkSticking() {

}