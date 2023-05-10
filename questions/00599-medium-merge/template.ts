type Merge<F, S> = {
  [A in keyof F | keyof S]: A extends keyof S ? S[A] : A extends keyof F ? F[A] : never
}
