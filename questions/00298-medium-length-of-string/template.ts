type StrToArr<S extends string> = S extends `${infer F}${infer R}` ? [1, ...StrToArr<R>] : []
type LengthOfString<S extends string> = StrToArr<S>['length']
