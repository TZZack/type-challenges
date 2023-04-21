/**
 * 一定要string | number | symbol
 * 虽然keyof any出来的就是string | number | symbol啊，那为什么any不行(key of any)[]就行呢？
 * 别人的解析：
 * keyof操作符是用于提取后面对象键的操作，那么keyof any，意思就是提取一个any类型的对象键，但是对象键只可能是 string number symbol，所以即使对于any，也就是任何类型进行keyof提取对象键，只可能出现这三种类型，大概是下面这个意思
 *   let a: any;
 *   a['a'] //ok
 *   a[0] // ok
 *   a[Symbol()] //ok
 *   a[{}] // error
 * 所以在any上运行keyof，ts就是给出了全部可能的对象键类型
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}
