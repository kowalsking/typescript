class User {
  _login!: string;
  password!: string;

  set login(l: string) {
    this._login = l;
  }

  get login() {
    return this._login;
  }
}

const user = new User();