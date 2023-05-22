// Part One
const f = s => s.split('').reduce((acc, e) => e === '(' ? acc + 1 : acc - 1, 0);

// Part Two
const g = s => s.split('').reduce((acc, e, i) => {
  let v = e === '(' ? acc.floor + 1 : acc.floor - 1;
  if (v === -1) return { floor: v, index: i + 1 };
  return acc.index === 0 ? { floor: v, index: acc.index } : acc;
}, { floor: 0, index: 0 });
