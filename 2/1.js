const fs = require("fs");
const lines = fs.readFileSync("input.txt", "utf-8").split("\n");
/*const lines = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`.split("\n");*/

const r = lines
  .map((line) => {
    const ints = line.split(" ").map((n) => parseInt(n));
    for (let i = 0; i < ints.length; i++) {
      let prev = ints[i - 1];
      let cur = ints[i];
      let next = ints[i + 1];

      if (prev) {
        if (prev - cur < -3 || prev - cur > 3 || prev == cur) {
          return "UNSAFE";
        }

        if (next) {
          if ((prev < cur && next < cur) || (prev > cur && next > cur)) {
            return "UNSAFE";
          }
        }
      }
    }

    return "SAFE";
  })
  .filter((r) => r == "SAFE");
console.log(r.length);
