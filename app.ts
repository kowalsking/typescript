function runTransition(transaction: { fromTo: [string, string] }) {
  console.log('Running transition')
}

const transaction: GetFirstArg<typeof runTransition> = {
  fromTo: ['1', '2']
}

runTransition(transaction)

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never 