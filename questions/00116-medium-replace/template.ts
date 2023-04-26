type Replace<S extends string, From extends string, To extends string> = From extends '' ?
  S : S extends `${infer p}${From}${infer n}` ? `${p}${To}${n}` : S
