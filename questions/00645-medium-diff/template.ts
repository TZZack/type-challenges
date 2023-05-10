// 我一开始的实现方式，不够精简
// type Diff<O1, O2> = {
//   [K in keyof O1 | keyof O2 as K extends keyof O1 ? K extends keyof O2 ? never : K : K]: K extends keyof O1 ? O1[K] : K extends keyof O2 ? O2[K] : never
// }
// 我的方式精简后，&和|的用法最后面有分析
type Diff<O, O1> = {
  [K in keyof(O & O1) as K extends keyof(O | O1) ? never : K]: (O & O1)[K]
}
// 网上比较好的解决方案1
// type Diff<O, O1> = {
//   [K in Exclude<keyof (O & O1), keyof(O | O1)>]: (O & O1)[K]
// }
// 网上比较好的解决方案2
// type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>

type O1 = {
  a: string
  b: number
}
type O2 = {
  a: string
  c: number
}
// 相同的部分，Om1为a
type keyofM1<O> = keyof O
type Om1 = keyofM1< O1 | O2>
// 注意keyof<O1 | O2>和keyof O1 | keyof O2的区别，Om2为a | b | c，与keyofM1<O1 & O2>结果一致
type keyofM2<O1, O2> = keyof O1 | keyof O2
type Om2 = keyofM2<O1, O2>
