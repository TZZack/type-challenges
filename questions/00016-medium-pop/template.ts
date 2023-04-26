type Pop<T extends any[]> = T extends [...infer Prev, infer Last] ? Prev : T extends [] ? T : never
