type ToObj<T> = {
  [K in keyof T]: T[K]
}
type PartialByKeys<T, K extends keyof T = keyof T> = ToObj<
  {
    [A in keyof T as A extends K ? A : never]?: T[A]
  }
  &
  {
    [A in keyof T as A extends K ? never : A]: T[A]
  }
>
