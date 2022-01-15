//tuple
const clientData: readonly [number, string] = [1, '']; // protegendo a tupla

const clientData2: [number, string, string?] = [1, ''];

const clientData3: [number, ...string[]] = [1, ''];

//read only array

const array: readonly string[] = ['a', 'b'];

clientData2[0] = 2;

console.log(clientData, clientData2, clientData3, array);
