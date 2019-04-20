import thinid from '../src';

test('Thinid Test', () => {
  const id = thinid();
  expect(id).toHaveLength(17);
  expect(typeof id).toEqual('string');
});
