const crypto = require('crypto');

// Part One
const f = (input, numZeros = 5) => {
  const hash = n => crypto
    .createHash('md5')
    .update(input + n.toString())
    .digest('hex')
    .toString();

  let n = 0;
  let result = hash(n);
  while (!result.startsWith('0'.repeat(numZeros))) {
    n++;
    result = hash(n);
  }

  console.log(n);
};

f('abcdef');
f('pqrstuv');
f('bgvyzdsv');

// Part Two
const g = i => f(i, 6);

g('bgvyzdsv');
