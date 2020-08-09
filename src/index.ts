/**
 * Generate unique id.
 * @param length Length of Id.
 */
export function diana(length = 16): string {
  if (length <= 0) {
    length = 16
  }
  return randomString(length);
}

/**
 * Create a random string with length.
 * @param length string length.
 */
function randomString(length: number): string {
  const pool = ['-', '_', '@', '#', '$', '%', '^', '&', '*'];
  let data = '';
  let i = 0;
  while(i < length) {
    if (ramdomNumber(0, pool.length) === 0) {
      data = data.concat(pool[ramdomNumber(0, pool.length)]);
    } else {
      data = data.concat(String.fromCharCode(ramdomNumber(97, 122)));
    }
    i++;
  }
  return data;
}

/**
 * Create a random integer from min to max - 1.
 * @param min min number.
 * @param max max number.
 */
function ramdomNumber(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min));
}
