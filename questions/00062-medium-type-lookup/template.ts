// 泛型里面，extends意思是是否继承自 xx
type LookUp<U, T> = U extends { type: T } ? U : never
