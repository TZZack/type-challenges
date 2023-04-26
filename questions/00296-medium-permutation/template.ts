// TODO：还是没完全理解
// 官方文档中，介绍了一种操作，叫 Distributive conditional types
// 简单来说，传入给T extends U中的T如果是一个联合类型A | B | C，则这个表达式会被展开成
// (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)
// [U] extends [never] 而不是 U extends never 因为  U是联合类型 条件类型会走分配得到的是一个联合类型  不符合期望
type Permutation<T, K=T> =
    [T] extends [never]
      ? []
      : K extends K
        ? [K, ...Permutation<Exclude<T, K>>]
        : never
