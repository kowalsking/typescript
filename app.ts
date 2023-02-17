const data = [
  { id: 1, name: 'One' },
  { id: 3, name: 'Two' },
  { id: 2, name: 'Three' },
]

function sort<T extends { id: number }>(arr: T[], to: 'up' | 'down' = 'up'): T[] {
  if (to === 'up') {
    return arr.sort((a, b) => a.id - b.id)
  }
  return arr.sort((a, b) => b.id - a.id)
}

console.log(sort(data, 'up'))
console.log(sort(data, 'down'))