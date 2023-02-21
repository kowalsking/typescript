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

function group<T, K extends keyof T>(data: T[], key: K) {
  const result = {}
  data.forEach(element => {
    const temp = element[key] as unknown as string;
    result[temp] ??= []
    result[temp].push(element)
  })
  return result
}

console.log(group(data, 'name'))