type Shift<T extends any[]> = T extends [any, ...infer R] ? [...R] : []
