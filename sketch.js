// move walker randomly
// if walker leaves canvas -> respawn walker on edge
// if walker touches tree -> add to tree, respawn
// draw



const tree = [];
const radius = 8;
const walkers = [];

function setup() {
  createCanvas(400, 400);
  tree[0] = createVector(width / 2, height / 2); // point in the middle of the window
  for (let i = 0; i < 10; i++) {
    walkers.push(spawnWalkerOnEdge());
  }
}

function draw() {
  background(0);

  for (let i = 0; i < tree.length; i++) {
    strokeWeight(radius);
    stroke(255);
    point(tree[i].x, tree[i].y);
  }

  for (let i = 0; i < walkers.length; i++) {

    stroke(150);
    moveWalker(walkers[i]);
    if (!checkSticking(walkers[i])) {
      point(walkers[i].x, walkers[i].y);
    }
  }
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

function moveWalker(w) {
  const vel = 5;

  w.x += random(-vel, vel);
  w.y += random(-vel, vel);

  w.x = constrain(w.x, 0, width);
  w.y = constrain(w.y, 0, height);

}
function checkSticking(w) {

  for (let i = 0; i < tree.length; i++) {

    let distance = dist(w.x, w.y, tree[i].x, tree[i].y);

    if (distance < radius * 2) {
      // stop walker in its tracks
      tree.push(w);
      // spawn new walker
      walkers
      return true; // returns stop the entire function
    }
  }
  return false; // return outside of the for loop or else it stops the for loop on the first iteration tree[0]

}