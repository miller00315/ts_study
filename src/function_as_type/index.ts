type MapStringCallback = (item: string) => string; //tipagem da funcção

export function mapString(
  array: string[],
  callBackFunction: MapStringCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callBackFunction(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abcMapped);
