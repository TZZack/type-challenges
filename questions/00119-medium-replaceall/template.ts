// S extends `${infer p}${From}${infer n}`始终命中第一个From，所以后续只需要替换n那部分即可
type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ?
  S : S extends `${infer p}${From}${infer n}` ? `${p}${To}${ReplaceAll<`${n}`, From, To>}` : S
