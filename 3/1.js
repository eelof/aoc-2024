const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8");

const example =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

// match all valid mul()
const groupRe = /mul\(\d+,\d+\)/g;

// match digits within mul()
const mulRe = /\d+/g;

const solution = input
  .match(groupRe)
  .map((gr) => gr.match(mulRe))
  .map((arr) => arr.reduce((a, b) => a * b, 1))
  .reduce((a, b) => a + b, 0);

console.log(solution);
