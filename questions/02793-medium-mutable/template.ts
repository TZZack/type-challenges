// -readonly表示去掉readonly，官网有说，不显式地去掉readonly，则还是会保持
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#improvements-for-readonlyarray-and-readonly-tuples
type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}
