let x = 10;

x = 2;

const person = {
  name: 'awd' as const,
  surname: 'typ',
};

console.log(x, person);

function selectColor(color: 'red' | 'blue' | 'green'): string {
  return color;
}

console.log(selectColor('red'));

export default 1;
