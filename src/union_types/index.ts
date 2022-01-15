function addOrConcat(a: number | string, b: number | string): string | number {
  //pode-se retornar e enviar vários tipos
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  else return `${a}, ${b}`;
}

console.log(addOrConcat(4, 5));
