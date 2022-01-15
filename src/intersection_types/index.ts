type asName = { name: string };
type asSurname = { surname: string };
type asAge = { age: number };

type People = asName & asSurname & asAge; //intersection type

type AB = 'A' | 'B' | 'C';
type AC = 'A' | 'C' | 'D';

type intersection = AB & AC;

const people: People = {
  name: 'aaa',
  surname: 'jjk',
  age: 67,
};

console.log(people);

export default 1;
