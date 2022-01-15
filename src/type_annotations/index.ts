const nome = 'luiz';
const age = 30;
const major = true;
const sym = Symbol('qwerty');

//Arrays
const numberArray: Array<number> = [1, 2, 3, 4, 5];
const stringArray: string[] = ['1', '2', '3', '4', '5'];

// Objetos
const people: { name: string; age: number; major?: boolean } = {
  name: 'Jamanta',
  age: 10,
  major: true,
};

console.log(people.name);

function Sum(x: number, y: number): number {
  return x + y;
}

const Sum2: (x: number, y: number) => number = (x, y) => x + y;
