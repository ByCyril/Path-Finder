function drawGrid() {
  stroke(0);
  for (var y = 0; y < 500; y += 10) {
    var r = [];
    for (var x = 0; x < 500; x += 10) {
      // let r = Math.floor(Math.random() * 4 + 1);

      // if (r == 1) {
      //   fill(255, 0, 0);
      //   rect(x, y, 10, 10);
      //   console.log(x, y);
      // } else {
      //   fill(255);
      //   rect(x, y, 10, 10);
      // }

      if (pos.has(str(x) + "," + str(y))) {
        r.push(1);
        fill(255, 0, 0);
        rect(x, y, 10, 10);
      } else {
        r.push(0);
        fill(255);
        rect(x, y, 10, 10);
      }
    }
    grid.push(r);
  }
}

function drawGrid2() {
  stroke(0);
  for (var y = 0; y < 500; y += 10) {
    // var r = [];
    for (var x = 0; x < 500; x += 10) {
      // let r = Math.floor(Math.random() * 4 + 1);

      // if (r == 1) {
      //   fill(255, 0, 0);
      //   rect(x, y, 10, 10);
      //   console.log(x, y);
      // } else {
      //   fill(255);
      //   rect(x, y, 10, 10);
      // }

      if (pos.has(str(x) + "," + str(y))) {
        // r.push(1);
        fill(255, 0, 0);
        rect(x, y, 10, 10);
      } else {
        // r.push(0);
        fill(255);
        rect(x, y, 10, 10);
      }
    }
    // grid.push(r);
  }
}
