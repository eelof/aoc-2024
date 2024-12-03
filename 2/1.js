const fs = require("fs");
const lines = fs.readFileSync("input.txt", "utf-8").split("\n");

const example = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`.split("\n");

// Evaluate an array of ints, determining safeNess of the entire collection
const isSafe = (ints) => {
  for (let i = 0; i < ints.length; i++) {
    let prev = ints[i - 1];
    let cur = ints[i];
    let next = ints[i + 1];

    if (prev) {
      if (prev == cur || Math.abs(prev - cur) > 3) {
        return false;
      }

      // Check if decreasing / increasing
      if (next) {
        if ((prev < cur && next < cur) || (prev > cur && next > cur)) {
          return false;
        }
      }
    }
  }

  return true;
};

const r = lines
  .map((line) => line.split(" ").map((n) => parseInt(n)))
  .filter((ints) => isSafe(ints)).length;

console.log(r);
