const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf-8").split("\n");

/*const lines = `3   4
4   3
2   5
1   3
3   9
3   3`.split("\n");*/

const countOccurrences = (arr, needle) => {
  return arr.filter((n) => n == needle).length;
};

let left = [];
let right = [];

lines.forEach((line) => {
  let segments = line.split("   ");
  const l = parseInt(segments[0]);
  const r = parseInt(segments[1]);
  left.push(l);
  right.push(r);
});

let occ = new Map();

const r = left
  .map((n) => {
    if (!occ.has(n)) {
      occ.set(n, countOccurrences(right, n));
    }

    return occ.get(n) * n;
  })
  .reduce((a, b) => a + b, 0);

console.log(r);
