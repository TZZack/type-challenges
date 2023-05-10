type getPrefix<T> = T extends '-' | '+' ? T : never
type getSuffix<T> = T extends `${infer B}%` ? [B, '%'] : [T, '']
type PercentageParser<A extends string> = A extends `${getPrefix<infer L>}${infer R}` ? [L, ...getSuffix<R>] : ['', ...getSuffix<A>]
