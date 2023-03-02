interface IUserService {
  users: number
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  @Max(100)
  users: number = 1000

  @Catch(true)
  getUsersInDatabase(): number {
    throw new Error('Errrr')
  }
}

function Max(max: number) {
  return (
    target: Object,
    propertyKey: string | symbol,
  ) => {
    let value: number;
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log('Over limit!', max)
      } else {
        value = newValue
      }
    }
    const getter = function () {
      return value
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })
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
us.users = 1000
console.log(us.users)
