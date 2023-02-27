interface IUserService {
  users: number
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  users: number = 1000

  @Log
  getUsersInDatabase(): number {
    throw new Error('Errrr')
  }
}

function Log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  console.log('target', target)
  console.log('propertyKey', propertyKey)
  console.log('descriptor', descriptor)

  const oldValue = descriptor.value

  descriptor.value = () => {
    console.log('Gaga')
    if(oldValue) oldValue()
  }
}

console.log(new UserService().getUsersInDatabase())
