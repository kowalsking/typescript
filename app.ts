interface IUserService {
  users?: number
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  private _users!: number

  getUsersInDatabase(): number {
    return this._users
  }

  setUsersInDatabase(@Positive() num: number): void {
    this._users = num
  }
}

function Positive() {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    
  }
}

const us = new UserService()