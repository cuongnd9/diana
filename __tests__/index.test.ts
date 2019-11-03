import { uid, code } from '../src';

test('should create an unique id', () => {
  expect(typeof uid()).toEqual('string');
  expect(typeof uid(0)).toEqual('string');
  expect(typeof uid(12)).toEqual('string');
  expect(typeof uid(32)).toEqual('string');

  expect(uid()).toHaveLength(24);
  expect(uid(0)).toHaveLength(24);
  expect(uid(12)).toHaveLength(12);
  expect(uid(32)).toHaveLength(32);
});

test('should not duplicate ids', () => {
  const set = new Set();
  for (let i = 0; i < 10000; i++) {
    expect(set.has(uid())).toBeFalsy();
    set.add(uid());
  }
});

test('should create a number code', () => {
  expect(typeof code(2)).toEqual('string');
  expect(typeof code(10)).toEqual('string');
  expect(typeof code()).toEqual('string');
  expect(typeof code(4)).toEqual('string');
  expect(typeof code(5)).toEqual('string');
  expect(typeof code(6)).toEqual('string');

  expect(code(2)).toHaveLength(4);
  expect(code(10)).toHaveLength(4);
  expect(code()).toHaveLength(4);
  expect(code(4)).toHaveLength(4);
  expect(code(5)).toHaveLength(5);
  expect(code(6)).toHaveLength(6);

  const sampleCode = code().toString();
  expect(sampleCode.charAt(1)).toBe(sampleCode.charAt(2))
});
