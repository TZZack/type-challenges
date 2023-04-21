type MyAwaited<T extends Promise<any>> = T extends Promise<infer S> ? S extends Promise<any> ? MyAwaited<S> : S : never
