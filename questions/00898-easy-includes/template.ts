type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? [First, U] extends [U, First] ? true : Includes<Rest, U>
  : false
