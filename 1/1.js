const fs = require("fs");

const example = `3   4
4   3
2   5
1   3
3   9
3   3`.split("\n");

const lines = fs.readFileSync("input.txt", "utf-8").split("\n");

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
let right = [];

lines.forEach((line) => {
  const [l, r] = line.split("   ").map((n) => parseInt(n));
  insert(left, l);
  insert(right, r);
});

const result = left.reduce((acc, n, idx) => Math.abs(right[idx] - n) + acc, 0);

console.log(result);
