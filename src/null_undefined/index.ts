let x;

if (typeof x === 'undefined') x = 20;

console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): { firstName: string; lastName?: string } {
  return { firstName, lastName };
}

export function squareOf(x: unknown) {
  if (typeof x !== 'number') return null;

  return x * x;
}

console.log(squareOf('a'));
const value = squareOf(100000000);

if (value === null) {
  console.log('error');
} else {
  console.log(value * 2);
}
