class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Users extends Array<User> {
  searchByName(name: string) {
    return this.filter(u => u.name === name);
  }

  override toString(): string {
    return this.map(u => u.name).join(', ')
  }
}

const users = new Users()
