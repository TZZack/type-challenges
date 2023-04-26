type seperator = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${seperator}${infer R}` ? TrimLeft<R> : S
