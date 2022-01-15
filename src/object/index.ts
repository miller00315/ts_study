const objectA: {
  readonly keyA: string; // impede a alteração
  keyB: string;
  keyC?: string;
  [key: string]: unknown; //Aceita qualquer coisa
} = {
  keyA: 'A',
  keyB: 'B',
};

objectA.keyD = 'Lavras';

console.log(objectA);
