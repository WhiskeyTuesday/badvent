const common = (i, v, d) => i.split('').reduce((acc, e) => {
  const newPos = (() => {
    switch (e) {
      case '^': return [acc.pos[0], acc.pos[1] + 1];
      case 'v': return [acc.pos[0], acc.pos[1] - 1];
      case '>': return [acc.pos[0] + 1, acc.pos[1]];
      case '<': return [acc.pos[0] - 1, acc.pos[1]];
      default: throw new Error('DRUNKEN_ELF_ERROR');
    };
  })();

  if (d) console.log(newPos);

  return { pos: newPos, visited: acc.visited.add(newPos.join(',')) };
}, { pos: [0, 0], visited: v || new Set(['0,0']) });

// Part One
const f = i => common(i).visited.size;

console.log(f('>'));
console.log(f('^>v<'));
console.log(f('^v^v^v^v^v'));

// Part Two

const g = (i, d) => {
  const fleshySantaInstructions = i.split('')
    .flatMap((e, i) => i % 2 === 0 ? [e] : [])
    .join('');

  const roboSantaInstructions = i.split('')
    .flatMap((e, i) => i % 2 === 1 ? [e] : [])
    .join('');

  if (d) {
    console.log(fleshySantaInstructions.slice(0, 10));
    console.log(roboSantaInstructions.slice(0, 10));
  }

  return common(
    roboSantaInstructions,
    common(fleshySantaInstructions, false, false).visited,
    false,
  ).visited.size;
};

console.log(g('^v'));
console.log(g('^>v<'));
console.log(g('^v^v^v^v^v'));
