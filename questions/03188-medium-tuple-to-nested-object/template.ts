// F & string means F is string, if F is not string, you will get never
// 猜测这里F & string 是为了解决K in F的报错，但不能是K in F as string
type TupleToNestedObject<T extends any[], U> = T extends [infer F, ...infer R] ?
    {
      [K in F & string]: TupleToNestedObject<R, U>
    } : U

