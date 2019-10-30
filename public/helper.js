function drawGrid() {
  stroke(255);
  for (var y = 0; y < 500; y += 10) {
    var row = [];
    for (var x = 0; x < 500; x += 10) {
      let r = Math.floor(Math.random() * 5 + 1);

      if (r == 1) {
        fill(0);
        stroke(0);
        rect(x, y, 10, 10);
        console.log(x, y);
        row.push(1);
        pos.add(x + "," + y);
      } else {
        fill(255);
        stroke(255);

        row.push(0);
        rect(x, y, 10, 10);
      }
    }
    grid.push(row);
  }
}

function maintainGrid() {
  stroke(255);
  for (var y = 0; y < 500; y += 10) {
    for (var x = 0; x < 500; x += 10) {
      if (pos.has(x + "," + y)) {
        // fill(255, 0, 0);
        // stroke(255, 0, 0);
        fill(0);
        rect(x, y, 50, 50);
      } else {
        fill(255);
        stroke(255);

        rect(x, y, 50, 50);
      }
    }
  }
}
