import { diana } from '../src';

test('diana test', () => {
  expect(typeof diana()).toEqual('string');
  expect(typeof diana(0)).toEqual('string');
  expect(typeof diana(12)).toEqual('string');
  expect(typeof diana(32)).toEqual('string');

  expect(diana()).toHaveLength(16);
  expect(diana(0)).toHaveLength(16);
  expect(diana(12)).toHaveLength(12);
  expect(diana(32)).toHaveLength(32);
});

test('has no collisions', () => {
  const set = new Set();
  let n = 0;
  while (n < 100000) {
    expect(set.has(diana())).toBeFalsy();
    set.add(diana());
    n++;
  }
});
