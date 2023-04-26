import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])

// 1和2的区别是最后一个是promise，promise的话，promise里面返回的是3，但么有标记只读，所有返回类型是number，而不是字面量类型，想要返回3的话可以在3后面加 as const
// 2和3的区别是数组里面的元素是否只读，as const将每个元素标记为只读字面量类型，这样，获取类型的时候则为1而不是number
// TODO：4的话我看github上面所有的答案都没有解决，暂时不看
type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
]
