function drawGrid() {
  stroke(0);
  for (var x = 0; x < 500; x += 50) {
    for (var y = 0; y < 500; y += 50) {
      if (pos.has(str(x) + "," + str(y))) {
        fill(255, 0, 0);
        rect(x, y, 50, 50);
      } else {
        fill(255);
        rect(x, y, 50, 50);
      }
    }
  }
}
