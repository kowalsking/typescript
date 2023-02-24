const a: number = Math.random() > 0.5 ? 1 : 0

interface HTTPResponse<T extends 'success' | 'failed'> {
  code: number
  data: T extends 'success' ? string : Error
  additionalData?: T extends 'failed' ? string : number
}

const error: HTTPResponse<'failed'> = {
  code: 500,
  data: new Error(),
}

const success: HTTPResponse<'success'> = {
  code: 500,
  data: 'done',
}

class User {
  id!: number
  name!: string
}

class UserPersistent extends User {
  dbId!: string
}

function getUser(id: number): User
function getUser(dbId: string): UserPersistent
function getUser(dbUdOrId: string | number): User | UserPersistent {
  if (typeof dbUdOrId === 'number') {
    return new User()
  } else {
    return new UserPersistent()
  }
}

type UserOrUserPersistent<T extends string | number> = T extends number
  ? User
  : UserPersistent

function getUser2<T extends string | number>(id: T): UserOrUserPersistent<T> {
  if (typeof id === 'number') {
    return new User() as UserOrUserPersistent<T>
  } else {
    return new UserPersistent()
  }
}

const res = getUser2(1)
const res2 = getUser2('1')