// 没写出来，网上答案的思路
// 1. T extends T可以判断T是否为never；
// 2. U extends T，extends可以拆分联合类型分别判断，再将每个子结果再联合起来；
// 3. 如果T是联合类型，那么子结果就会含有unknown ，括号最终的结果是一个含有unknown的联合类型；
// 4. Union extends true，Union含有unknown就是一个联合类型，只含有never或true就不是一个联合类型，可以通过extends true来判断。
type IsUnion<T, U = T> = (T extends T ? U extends T ? true : unknown : never) extends true ? false : true

// 分步验证
/* 1. T extends T，never extends never为false，如果T不为never，则一定是true */
// chatgpt解释never extends never判断细节
// Q: typescript泛型中，为啥never extends never为false，而[never] extends [never]则为true，解释一下
// A: 在 TypeScript 中，never 表示一个不可能存在的类型，即表示永远不会有值的类型。在泛型中，never 可以用来表示一些不可能出现的类型，例如一个空数组的类型可以表示为 never[]。
// 当我们使用 extends 关键字来比较两个类型时，如果一个类型可以被另一个类型所赋值，那么就认为这两个类型是兼容的，返回值为 true。否则，返回值为 false。
// 对于 never extends never，由于 never 表示一个不可能存在的类型，因此不存在任何值可以赋值给 never，所以返回值为 false。
// 而对于 [never] extends [never]，虽然 never 表示一个不可能存在的类型，但是它可以作为数组的元素类型存在。因此，一个空数组的类型 [never] 可以被赋值给另一个空数组的类型 [never]，所以返回值为 true。
/* 2. T extends T ? U extends T ? true : unknown : never  */
// 如果是type temp1<T, U = T> = U extends T ? true : unknown，那下面的结果总是true，除非是传入never，因为extends左边是联合类型，则逐个拿出来和T比较，是否extends
// 所以一定要是T extends T ? U extends T ? true : unknown : never，这样U extends T就指的是U逐个值与T中某个值作extends判断，那如果U（即T）不是联合类型，则肯定为true
// type temp1<T, U = T> = T extends T ? U extends T ? true : unknown : never
// type test1_1 = temp1<'a' | 'b' | 'c'>// 如果是联合类型则为unknown
// type test1_2 = temp1<'a'>// 如果不是则为true

// TODO:
// 按上面的分析理解，重写一个，跟另一个答案相差不大，但不知道为啥判断不成功，恒为false和never
// type IsUnion<T, U = T> = T extends T ? (U extends T ? false : true) : false
// type test1 = IsUnion<'a' | 'b'> // 为啥是boolean
