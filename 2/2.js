const fs = require("fs");
const lines = fs.readFileSync("input.txt", "utf-8").split("\n");
/*const lines = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`.split("\n");*/

const isSafe = (ints) => {
  for (let i = 0; i < ints.length; i++) {
    let prev = ints[i - 1];
    let cur = ints[i];
    let next = ints[i + 1];

    if (prev) {
      if (prev - cur < -3 || prev - cur > 3 || prev == cur) {
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

const sub = (arr, idx) => arr.filter((_, i) => i != idx);

const r = lines.filter((line) => {
  let ints = line.split(" ").map((n) => parseInt(n));
  let result = isSafe(ints);

  if (result) return true;

  for (let i = 0; i < ints.length; i++) {
    // Early return if a safe version of array is found
    if (isSafe(sub(ints, i))) {
      return true;
    }
  }

  return false;
}).length;

console.log(r);
