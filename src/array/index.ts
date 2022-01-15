export function multiply(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

const result = multiply(1, 2, 3);

console.log(result);

export function concatenateString(...args: Array<string>): string {
  return args.reduce((ac, value) => ac + value, '');
}

console.log(concatenateString('a', 'e'));

export function toUpperCase(...args: string[]): string[] {
  return args.map((x) => x.toUpperCase());
}

console.log(toUpperCase('a', 'b', 'c'));
