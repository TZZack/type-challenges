/**
 * 在 TypeScript 中，as 关键字可以用于类型断言，即告诉编译器某个值的类型。
 * 但是在这个代码片段中，as 关键字的作用不是类型断言，而是类型映射中的语法。
 * 具体来说，这个代码片段使用了 TypeScript 中的类型映射语法，使用 as 关键字将一个类型映射中的属性名 P 分为两类：
 * 如果 P 是 K 类型的属性名，则将其映射为 never 类型，表示这个属性被忽略。
 * 如果 P 不是 K 类型的属性名，则将其映射为 T[P] 类型，表示这个属性被保留。
 */
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
