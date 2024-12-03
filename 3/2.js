const { match } = require("assert");
const { exec } = require("child_process");
const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8");

const example =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

// match all valid mul() and do/don't
const groupRe = /mul\((\d+,\d+\))|(don't\(\))|(do\(\))/g;

// match digits within mul()
const mulRe = /\d+/g;

let execute = true;
const solution = input.match(groupRe).reduce((acc, cur) => {
  if (cur.includes("mul")) {
    return execute ? acc + cur.match(mulRe).reduce((a, b) => a * b, 1) : acc;
  }

  execute = cur.includes("do()");

  return acc;
}, 0);

console.log(solution);
