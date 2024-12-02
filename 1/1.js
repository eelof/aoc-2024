const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf-8").split("\n");

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

/*const lines = `3   4
4   3
2   5
1   3
3   9
3   3`.split("\n");*/

let left = [];
let right = [];

console.log(left, right);

lines.forEach((line) => {
  let segments = line.split("   ");
  const l = parseInt(segments[0]);
  const r = parseInt(segments[1]);
  left.push(l);
  right.push(r);
});

left.sort();
right.sort();

const result = left
  .map((n, idx) => Math.abs(right[idx] - n))
  .reduce((a, b) => a + b, 0);

console.log(result);
