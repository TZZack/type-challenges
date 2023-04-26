type space = ' ' | '\t' | '\n'
type Trim<S extends string> = S extends `${space}${infer R}` ? Trim<R> : (S extends `${infer U}${space}` ? Trim<U> : S)
