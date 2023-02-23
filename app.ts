interface Role {
  name: string
}


interface Permission {
  endDate: Date
}

interface User {
  name: string
  roles: Role[]
  permission: Permission
}

const user: User = {
  name: 'John',
  roles: [],
  permission: {
    endDate: new Date()
  }
}

const nameUser = user['name']
const roleName = 'roles'

type rolesType = User['roles']
type rolesType1 = User[typeof roleName]

type roleType = User['roles'][number] // Отримати елемент масиву.
type dateType = User['permission']['endDate'] // Отримати елемент масиву.

const roles = ['admin', 'user', 'superuser'] as const //  roles: readonly ["admin", "user", "superuser"]

type typeRoles = typeof roles[number] //  roles: readonly ["admin", "user", "superuser"]
