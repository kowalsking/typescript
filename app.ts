class User {
  constructor(public id: number, public name: string) {}
}

function getData(id: number): User {
  return new User(id, 'John')
}

type RT = ReturnType<typeof getData> // User
type RT1 = ReturnType<() => void> // void
type RT2 = ReturnType<<T>() => T> // unknown
type RT3 = ReturnType<<T extends string>() => T> // string

type PT = Parameters<typeof getData> // [id: number]

type first = PT[0] // number

type CP = ConstructorParameters<typeof User> // [id: number, name: string]
