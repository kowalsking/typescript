interface IUserService {
  users: number
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  private _users!: number

  set users(number) {
    this._users = number
  }

  @Log()
  get users() {
    return this._users
  }

  getUsersInDatabase(): number {
    throw new Error('Errrr')
  }
}

function Log() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const set = descriptor.set;
    descriptor.set = (...args: any[]) => {
      console.log(args);
      // @ts-ignore
      set?.apply(target, args);
    }
  }
}

function Catch(rethrow: boolean = false) {
  return (
    target: Object,
    _: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value

    descriptor.value = async (...args: any[]) => {
      try {
        return await method?.apply(target, args)
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message)

          if (rethrow) {
            throw e
          }
        }
      }
    }
  }
}

const us = new UserService()
us.users = 1
console.log(us.users)
