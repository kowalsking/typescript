interface Data {
  group: number
  name: string
}

const data: Data[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 3, name: 'c' },
  { group: 4, name: 'a' },
]

// function group<T, K extends keyof T>(data: T[], key: K) {
//   const result = {}
//   data.forEach(element => {
//     const temp = element[key] as unknown as string;
//     result[temp] ??= []
//     result[temp].push(element)
//   })
//   return result
// }

// console.log(group(data, 'name'))

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol

function group<T extends Record<key, any>>(
  array: T[],
  key: keyof T
): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key]
    let current = map[itemKey]
    if (Array.isArray(current)) {
      current.push(item)
    } else {
      current = [item]
    }
    map[itemKey] = current
    return map
  }, {})
} 
