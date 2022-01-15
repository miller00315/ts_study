type Age = number;

type RGBColor = 'red' | 'GREEN' | 'BLUE';

type CMYKColor = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';

type PreferenceColor = RGBColor | CMYKColor; // type alias

type People = {
  age: Age;
  name: string;
  salary: number;
  preferenceColor?: PreferenceColor;
};

const people: People = {
  age: 10,
  name: 'mill',
  salary: 200_000, // pode separa por _
};

console.log(people);

export function setPreferenceColor(people: People, color: PreferenceColor) {
  return { ...people, preferenceColor: color };
}

console.log(setPreferenceColor(people, 'Ciano'), people);
