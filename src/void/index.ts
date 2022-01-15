function noReturn(...args: string[]): void {
  console.log(args.join(', '));
}

const pessoa = {
  name: 'Meu',
  surname: 'oi',
  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

noReturn('Oi', 'vai filhão');
pessoa.showName();

export { pessoa };
