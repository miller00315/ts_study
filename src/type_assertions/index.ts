// Condicional recomendado
const body = document.querySelector('body');

if (body) body.style.background = 'red';

// Non-null assertion não recomendado
const body1 = document.querySelector('body')!;

body1.style.background = 'red';

// Type assertion recomendado se tem certeza
const body2 = document.querySelector('body') as HTMLBodyElement;

body2.style.background = 'red';

// HTML element recomendado se tem certeza
const input = document.querySelector('.input') as HTMLInputElement;

input.value = 'a';
