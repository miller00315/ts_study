interface Name {
  name: string;
}

interface Surname {
  surname: string;
}

interface FullName {
  fullName(): string;
}

type People = Name & Surname & FullName;

interface People2 extends Name, Surname, FullName {}

export class Employee implements People2 {
  constructor(public readonly name: string, public readonly surname: string) {}

  fullName(): string {
    return this.name + ' ' + this.surname;
  }
}

export class Company {
  public readonly name: string;
  private readonly employees: Employee[] = [];
  protected readonly cnpj;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee);
    }
  }
}

const company1 = new Company('ppp', '123456789');

const employee0: People2 = {
  name: 'ola',
  surname: 'mundo',
  fullName() {
    return this.name + ' ' + this.surname;
  },
};

const employee1 = new Employee('1qwek', 'dfgj');
const employee2 = new Employee('1qwef', 'dfgh');
const employee3 = new Employee('1qweg', 'dfgi');

company1.addEmployee(employee0);

company1.addEmployee(employee1);

company1.addEmployee(employee2);

company1.addEmployee(employee3);

console.log(company1);

company1.showEmployees();
