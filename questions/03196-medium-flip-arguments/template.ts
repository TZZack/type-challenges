type ReverseParams<T extends any[]> = T extends [infer F, ...infer R] ? [...ReverseParams<R>, F] : []
type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer S) => infer R ?
    (...args: ReverseParams<S>) => R : never
