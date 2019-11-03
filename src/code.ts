/**
 * Create number code with length option.
 * @param length Length of code
 * length from 4 to 6.
 */
function code(length: number = 4) {
  if (length < 4 || length > 6) {
    length = 4;
  }
  let result = '';
  for (let i = 0; i < length; i++) {
    result += i === 2 
    ? result.charAt(1)
    : Math.floor(Math.random() * 10);
  }
  return result;
}

export default code;
