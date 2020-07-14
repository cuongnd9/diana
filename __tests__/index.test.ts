import { diana } from '../src';

test('diana test', () => {
  expect(typeof diana()).toEqual('string');
  expect(typeof diana(0)).toEqual('string');
  expect(typeof diana(12)).toEqual('string');
  expect(typeof diana(32)).toEqual('string');

  expect(diana()).toHaveLength(24);
  expect(diana(0)).toHaveLength(24);
  expect(diana(12)).toHaveLength(12);
  expect(diana(32)).toHaveLength(32);
});

test('has no collisions', () => {
  const set = new Set();
  for (let i = 0; i < 100000; i++) {
    expect(set.has(diana())).toBeFalsy();
    set.add(diana());
  }
});
