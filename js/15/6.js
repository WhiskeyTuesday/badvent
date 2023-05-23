// Common
const parse = s => {
  const tokens = s.split(' ');
  const type = (() => {
    switch (tokens[0]) {
      case 'turn':
        switch (tokens[1]) {
          case 'on': return 'on';
          case 'off': return 'off';
          default: throw new Error('unknown turn command');
        }
      case 'toggle': return 'toggle';
      default: return new Error('unknown command');
    }
  })();

  const [x1, y1] = tokens[tokens.length - 3].split(',').map(Number);
  const [x2, y2] = tokens[tokens.length - 1].split(',').map(Number);
  return { type, x1, y1, x2, y2 };
};

const range = (x1, y1, x2, y2) => {
  const addresses = [];
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      addresses.push([x, y]);
    }
  }
  return addresses;
};

const execute = (i, map) => {
  const input = i.split('\n');
  const lights = Array(1000).fill().map(() => Array(1000).fill(0));

  input.forEach(s => {
    const { type, x1, y1, x2, y2 } = parse(s);
    const addresses = range(x1, y1, x2, y2);
    addresses.forEach(([x, y]) => {
      const v = lights[x][y];
      lights[x][y] = map[type](v);
    });
  });

  return lights.reduce((a, b) => a + b.reduce((c, d) => c + d, 0), 0);
};


// Part One
const f = (i) => {
  const map = {
    on: () => 1,
    off: () => 0,
    toggle: (v) => v ? 0 : 1,
  };

  return execute(i, map);
};

// Part Two
const g = (i) => {
  const map = {
    on: (v) => v + 1,
    off: (v) => v ? v - 1 : 0,
    toggle: (v) => v + 2,
  };

  return execute(i, map);
};

/*  Original part one only solution
const f = (i) => {
  const input = i.split('\n');
  const lights = Array(1000).fill().map(() => Array(1000).fill(0));
  const parse = s => {
    const tokens = s.split(' ');
    const type = (() => {
      switch (tokens[0]) {
        case 'turn':
          switch (tokens[1]) {
            case 'on': return 'on';
            case 'off': return 'off';
            default: throw new Error('unknown turn command');
          }
        case 'toggle': return 'toggle';
        default: return new Error('unknown command');
      }
    })();

    const [x1, y1] = tokens[tokens.length - 3].split(',').map(Number);
    const [x2, y2] = tokens[tokens.length - 1].split(',').map(Number);
    return { type, x1, y1, x2, y2 };
  };

  const range = (x1, y1, x2, y2) => {
    const addresses = [];
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        addresses.push([x, y]);
      }
    }
    return addresses;
  };


  const execute = (type, x, y) => {
    switch (type) {
      case 'on': return 1;
      case 'off': return 0;
      case 'toggle': return lights[x][y] ? 0 : 1;
      default: throw new Error('unknown type');
    }
  }

  input.forEach(s => {
    const { type, x1, y1, x2, y2 } = parse(s);
    const addresses = range(x1, y1, x2, y2);
    addresses.forEach(([x, y]) => {
      lights[x][y] = execute(type, x, y);
    });
  });

  return lights.reduce((a, b) => a + b.reduce((c, d) => c + d, 0), 0);
};
*/
