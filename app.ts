type Modifier = 'read' | 'write' | 'update'

type UserRoles = {
  customers?: Modifier
  projects?: Modifier
  adminPanel?: Modifier
}

type RolesWithoutCustomers = Exclude<UserRoles, UserRoles['customers']>

type ModifierToAccess<Type> = {
  +readonly[Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessadminPanel'>]-?: boolean
}

type UserAccess2 = ModifierToAccess<UserRoles>

type UserAccess1 = {
  customers?: boolean
  projects?: boolean
  adminPanel: boolean
}
