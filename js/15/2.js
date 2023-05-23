// Part One
const f = i => {
  const inputArray = i.split('\n').map(i => i.split('x'));
  const requiredPaper = inputArray.map(([l, w, h]) => {
    const surfaces = [(2 * l * w), (2 * w * h), (2 * h * l)];
    const surfaceArea = surfaces.reduce((a, b) => a + b);
    const smallestSurface = Math.min(...surfaces) / 2;
    return surfaceArea + smallestSurface;
  });

  return requiredPaper.reduce((a, b) => a + b);
};

// Part Two
const g = i => {
  const inputArray = i.split('\n').map(i => i.split('x'));
  const requiredRibbon = inputArray.map(([l, w, h]) => {
    const perimeters = [(2 * l + 2 * w), (2 * w + 2 * h), (2 * h + 2 * l)];
    const smallestPerimeter = Math.min(...perimeters);
    const volume = l * w * h;
    return smallestPerimeter + volume;
  });

  return requiredRibbon.reduce((a, b) => a + b);
};
