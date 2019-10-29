let pos = new Set([
  "0,200",
  "0,300",
  "0,450",
  "50,300",
  "100,50",
  "100,150",
  "100,200",
  "100,250",
  "100,300",
  "150,300",
  "150,350",
  "150,450",
  "200,0",
  "300,150",
  "300,200",
  "350,0",
  "350,300",
  "350,350",
  "350,400",
  "400,400",
  "450,0",
  "450,50",
  "450,150",
  "450,200",
  "400,450",
  "450,450"
]);

var blocks = [];

var direction = -1; // up=0, down=-1,left=1,right=2
var playerPos = [0, 0];
var exit = [0, 400];
var distance = 100000;

x1 = 1;
y1 = 9;

tx = 0;
ty = 0;

function setup() {
  createCanvas(500, 500);

  frameRate(3);
}
function draw() {
  drawGrid();
  agentMovement();
  fill(0, 0, 255);
  rect(tx * 50, ty * 50, 50, 50);
}

var grid = [
  [0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 0, 0, 0, 1, 1]
];

var track = new Set();

function shortestDirection(x, y) {
  var d = [];

  d.push(getDistance(x + 1, y + 1));
  d.push(getDistance(x + 1, y - 1));
  d.push(getDistance(x - 1, y + 1));
  d.push(getDistance(x - 1, y - 1));
  d.push(getDistance(x, y - 1));
  d.push(getDistance(x, y + 1));
  d.push(getDistance(x + 1, y));
  d.push(getDistance(x - 1, y));

  d = sortD(d);
  console.log(d);
  for (var i = 0; i < d.length; i++) {
    if (isPath(d[i].x, d[i].y)) {
      return [d[i].x, d[i].y];
    }
  }
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
  return grid[y][x] == 0 && !track.has(x + "," + y);
}

function getDistance(x, y) {
  if (x >= 20 || y >= 20) {
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

var c = shortestDirection(x1, y1);
console.log(c);
function agentMovement() {
  fill(0, 255, 0);

  track.add(c[0] + "," + c[1]);
  rect(c[0] * 50, c[1] * 50, 50, 50);
  if (c[0] == tx && c[1] == ty) {
    noLoop();
  }
  c = shortestDirection(c[0], c[1]);
}
