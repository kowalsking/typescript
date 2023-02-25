type Modifier = 'read' | 'write' | 'update'

type UserRoles = {
  customers?: Modifier
  projects?: Modifier
  adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
  +readonly [Property in keyof Type as Exclude<
    `canAccess${string & Property}`,
    'canAccessadminPanel'
  >]-?: boolean
}

type UserAccess2 = ModifierToAccess<UserRoles>

type UserAccess1 = {
  customers?: boolean
  projects?: boolean
  adminPanel: boolean
}

/// //// /// /// /// /// // /// // /// // // // // // // // // // // // // // // // // //

interface IForm {
  name: string
  password: string
}

const form: IForm = {
  name: 'John',
  password: '123',
}

type IsValid = {
  isValid: boolean
  errorMessage?: string
}

type ModifierTypeForm<Type> = {
  [Property in keyof Type]-?: IsValid
}

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Password too short' },
}

type Validation<T> = {
  [K in keyof T]: {
    isValid: true
  } | {
    isValid: false
    errorMessage: string
  }
}
