// Part One
const f = (i, d) => {
  const input = i.split('\n');
  const test = (s) => {
    if (d) {
      console.log('*'.repeat(20));
      console.log(s);
      console.log('*'.repeat(20));
    }
    const vowels = (s.match(/[aeiou]/g)|| []).length >= 3;
    const doubles = s.match(/(.)\1/) !== null;
    const noBad = s.match(/ab|cd|pq|xy/) === null;
    return vowels && doubles && noBad;
  };
  return input.filter(test).length;
};

console.log(f(`ugknbfddgicrmopn`)); // 1
console.log(f(`aaa`)); // 1
console.log(f(`jchzalrnumimnmhp`)); // 0
console.log(f(`haegwjzuvuyypxyu`)); // 0
console.log(f(`dvszwmarrgswjxmb`)); // 0

// Part Two
const g = (i, d) => {
  const input = i.split('\n');
  const test = (s) => {
    if (d) {
      console.log('*'.repeat(20));
      console.log(s);
      console.log('*'.repeat(20));
    }
    const double = s.match(/(..).*\1/) !== null;
    const repeat = s.match(/(.).\1/) !== null;
    return double && repeat;
  }
  return input.filter(test).length;
};

console.log(g(`qjhvhtzxzqqjkmpb`)); // 1
console.log(g(`xxyxx`)); // 1
console.log(g(`uurcxstgmygtbstg`)); // 0
console.log(g(`ieodomkazucvgmuy`)); // 0
