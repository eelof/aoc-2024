const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf-8").split("\n");

const example = `3   4
4   3
2   5
1   3
3   9
3   3`.split("\n");

// Insert n into sorted position of arr (ascending)
const insert = (arr, n) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] <= n || arr[i] == undefined) {
      arr.splice(i, 0, n);
      return;
    }
  }
};

let left = [];
let occurrences = new Map();

lines.forEach((line) => {
  const [l, r] = line.split("   ").map((n) => parseInt(n));
  insert(left, l);
  occurrences.set(r, (occurrences.get(r) ?? 0) + 1);
});

const r = left
  .map((n) => n * (occurrences.get(n) ?? 0))
  .reduce((a, b) => a + b, 0);

console.log(r);
