// TODO：不是很懂，不懂的点主要在Promise<{...}>怎么转成数组的Promise<[]>
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: T[K] extends PromiseLike<infer V> ? V : T[K]
}>
