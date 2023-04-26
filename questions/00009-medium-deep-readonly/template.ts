type DeepReadonly<T> = {
  readonly [k in keyof T]: keyof T[k] extends never
    ? T[k]
    : T[k] extends Function
      ? T[k]
      : DeepReadonly<T[k]>
}
