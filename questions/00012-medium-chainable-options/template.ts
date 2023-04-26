// github多赞答案
// type Chainable<T = {}> = {
//   option: <K extends string, V>(key: K extends keyof T ?
//     V extends T[K] ? never : K
//     : K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
//   get: () => T
// }

// 上面的type还是result3的expect-error还是没满足，看得出是想相同key不管type是啥，都要报错，改了下
// 去掉了V的判断
type Chainable<T = {}> = {
  option: <K extends string, V>(key: K extends keyof T ?
    never : K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}
