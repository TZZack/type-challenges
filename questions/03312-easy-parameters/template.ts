type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer S) => any ? S : never
