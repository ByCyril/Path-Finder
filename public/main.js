var pos = new Set();

x1 = 47;
y1 = 47;
fr = 15;
tx = Math.floor(Math.random() * 50);
ty = Math.floor(Math.random() * 50);

console.log("target", tx, ty);
var grid = [];
var track = new Set();
var c = [0, 0];

function setup() {
  createCanvas(500, 500);
  drawGrid();
  c = shortestDirection(x1, y1);
  frameRate(fr);
}

function draw() {
  // console.log(grid.length);
  // console.log("init", c);
  if (grid.length != 0) {
    // drawGrid();
    // maintainGrid();
    agentMovement();
    drawTarget();
  }
}

function drawTarget() {
  fill(255, 0, 0);
  stroke(255, 0, 0);
  rect(tx * 10, ty * 10, 10, 10);
}
var track = new Set();
var hasVisited = new Set();

function shortestDirection(x, y) {
  var d = [];
  // d.push(getDistance(x - 1, y - 1));
  // d.push(getDistance(x - 1, y + 1));
  // d.push(getDistance(x + 1, y - 1));
  // d.push(getDistance(x + 1, y + 1));
  d.push(getDistance(x, y - 1));
  d.push(getDistance(x, y + 1));
  d.push(getDistance(x + 1, y));
  d.push(getDistance(x - 1, y));

  d = sortD(d);
  console.log(x, y, d);
  for (var i = 0; i < d.length; i++) {
    if (isPath(d[i].x, d[i].y)) {
      return [d[i].x, d[i].y];
    }
  }

  let al = Array.from(track);

  p = al.pop();
  track.delete(p);
  al = p.split(",");

  let xl = parseInt(al[0]);
  let yl = parseInt(al[1]);
  fill(0, 255, 0);
  stroke(0, 255, 0);
  rect(xl * 10, yl * 10 * 10, 10, 10);

  return shortestDirection(xl, yl);
}

function sortD(dict) {
  var d = dict;
  for (var i = 0; i < d.length; i++) {
    for (var j = 0; j < d.length; j++) {
      if (d[i].d < d[j].d) {
        let temp = d[i];
        d[i] = d[j];
        d[j] = temp;
      }
    }
  }
  return d;
}
function isPath(x, y) {
  if (x == tx && y == ty) {
    noLoop();
    console.log("done");
  }
  return (
    grid[y][x] == 0 && (!track.has(x + "," + y) && !hasVisited.has(x + "," + y))
  );
}

function getDistance(x, y) {
  if (x >= 500 || y >= 500) {
    return { d: 1000, x: x, y: y };
  }

  if (x == tx && y == ty) {
    return {
      d: 0,
      x: x,
      y: y
    };
  }

  let a = (tx - x) * (tx - x);
  let b = (ty - y) * (ty - y);

  return {
    d: Math.sqrt(a + b),
    x: x,
    y: y
  };
}

// var c = shortestDirection(x1, y1);
// console.log(c);
function agentMovement() {
  fill(0, 255, 0);
  stroke(0, 255, 0);
  track.add(c[0] + "," + c[1]);
  hasVisited.add(c[0] + "," + c[1]);

  rect(c[0] * 10, c[1] * 10, 10, 10);
  if (c[0] == tx && c[1] == ty) {
    noLoop();
  }
  c = shortestDirection(c[0], c[1]);
}
