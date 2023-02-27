interface IUserService {
  users: number
  getUsersInDatabase(): number
}

// @nullUser
@setUsers(122)
@log()
// @threeUserAdvanced
class UserService implements IUserService {
  users: number = 1000

  getUsersInDatabase(): number {
    return this.users
  }
}

function nullUser(target: Function) {
  target.prototype.users = 0
}

function setUsers(users: number) {
  console.log('setUsers init') // 1
  return (target: Function) => {
  console.log('setUsers run') // 4
    target.prototype.users = users
  }
}

function log() {
  console.log('log init') // 2
  return (target: Function) => {
    console.log('log run') // 3
    
  }
}

function setUsersAdvanced(users: number) {
  return <T extends { new(...args: any[]): {}}>(constructor: T) => {
    return class extends constructor {
      users = users
    }
  }
}

function threeUserAdvanced<T extends { new(...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    users = 3
  }
}

console.log(new UserService().getUsersInDatabase())