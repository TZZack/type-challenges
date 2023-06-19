type StrToUnion<S> = S extends `${infer F}${infer R}` ? F | StrToUnion<R> : S
type AllCombinations<S> = any
