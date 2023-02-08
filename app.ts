interface User {
  name: string;
}

const a = {}

assertUser(a)
a.name = 'Anton'

function assertUser(obj: unknown): asserts obj is User {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return
  }
  throw new Error('a')
}