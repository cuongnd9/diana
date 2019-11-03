import { uid } from '../src';

test('should create a unique id', () => {
  expect(typeof uid()).toEqual('string');
  expect(typeof uid(0)).toEqual('string');
  expect(typeof uid(12)).toEqual('string');
  expect(typeof uid(32)).toEqual('string');

  expect(uid()).toHaveLength(24);
  expect(uid(0)).toHaveLength(24);
  expect(uid(12)).toHaveLength(12);
  expect(uid(32)).toHaveLength(32);
});

test('should not have ids', () => {
  const set = new Set();
  for (let i = 0; i < 10000; i++) {
    expect(set.has(uid())).toBeFalsy();
    set.add(uid());
  }
});
