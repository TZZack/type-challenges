type Last<T extends any[]> = T extends [...infer Prev, infer Last] ? Last : never
