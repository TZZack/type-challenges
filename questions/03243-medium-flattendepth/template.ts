// 答案来自github，但是很好理解
// ts中需要比较具体的数字类型，通过都需要使用数组的length属性来辅助，这里就是加了个U，用U['length']来判断当前已打平的层数
type FlattenDepth<
  T extends any[],
  D extends number = 1,
  U extends any[] = []> = U['length'] extends D ?
    T : T extends [infer F, ...infer R] ?
      F extends any[] ? [...FlattenDepth<F, D, [...U, 1]>, ...FlattenDepth<R, D, U>] : [F, ...FlattenDepth<R, D, U>] :
      T
