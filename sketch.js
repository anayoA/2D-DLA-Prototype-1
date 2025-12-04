const tree = [];
const radius = 16;

function setup() {
  createCanvas(400, 400);
  tree[0] = createVector(width/2, height/2); // point in the middle of the window
  let walker = createVector(random, random)
}

function draw() {
  background(0);

  

  for (let i = 0; i < tree.length; i++)
  {
    strokeWeight(radius);
    stroke(255);
    point(tree[i].x, tree[i].y); 
  }
}
