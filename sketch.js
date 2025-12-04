// move walker randomly
// if walker leaves canvas -> respawn walker on edge
// if walker touches tree -> add to tree, respawn
// draw



const tree = [];
const radius = 4;
const walkers = [];
const numWalkers = 200;

function setup() {
  createCanvas(400, 400);
  tree[0] = createVector(width / 2, height / 2); // point in the middle of the window
  for (let i = 0; i < numWalkers; i++) {
    walkers.push(spawnWalkerOnEdge());
  }
}

function draw() {
  background(0);

  for (let i = 0; i < tree.length; i++) {
    strokeWeight(radius * 2);
    stroke(255);
    point(tree[i].x, tree[i].y);
  }

  for (let i = 0; i < walkers.length; i++) { // for all walkers, updates their position then checks if they're sticking. if yes -> spawn new.

    stroke(150);
    for (let steps = 0; steps < 5; steps++) {
      moveWalker(walkers[i]);
      if (checkSticking(walkers[i])) {
        tree.push(createVector(walkers[i].x, walkers[i].y));
        walkers[i] = spawnWalkerOnEdge();
        walkerStuck = true;
        break;
      }
    }
    if (!walkerStuck){
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
  const vel = 1;

  w.x += random(-vel, vel);
  w.y += random(-vel, vel);

  if (w.x < 0 || w.x > width || w.y < 0 || w.y > height) {
    let newW = spawnWalkerOnEdge();
    w.x = newW.x;
    w.y = newW.y;
    return;
  }


}
function checkSticking(w) {

  for (let i = 0; i < tree.length; i++) {

    let distance = dist(w.x, w.y, tree[i].x, tree[i].y);

    if (distance < radius * 2) {
      return true; // returns stop the entire function
    }
  }
  return false; // return outside of the for loop or else it stops the for loop on the first iteration tree[0]

}