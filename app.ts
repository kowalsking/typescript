type ReadOrWrite = 'read' | 'write'
type Bulk = 'bulk' | ''

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never
type T = ReadOrWriteBulk<Access>

type ErrorOrSuccess = 'error' | 'success'

type ResponseT = {
  result: `http${Capitalize<ErrorOrSuccess>}`
}

const a: ResponseT = {
  result: 'httpSuccess'
}