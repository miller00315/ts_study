enum Colors {
  RED,
  BLUE,
  YELLOW,
}

enum Colors {
  GREEN = 90,
  BLACK,
  GREY,
}

console.log(Colors);
console.log(Colors.BLUE);

console.log(Colors[0]);

function selectColor(color: Colors): void {
  console.log(Colors[color]);
}

selectColor(90);
