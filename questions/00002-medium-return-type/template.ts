type MyReturnType<T> = T extends (...args: any[]) => infer S ? S : never
