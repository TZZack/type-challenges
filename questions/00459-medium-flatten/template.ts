type Flatten<T extends any[]> = T extends [infer F1, ...infer R1] ? [...(F1 extends any[] ? Flatten<F1> : [F1]), ...Flatten<R1>] : []
