// TODO，github上较新的答案，已全部理解
type IntToStrArray<T extends number | string> = `${T}` extends `${infer F}${infer L}` ? [F, ...IntToStrArray<L>] : []
type StrMinus = {
  '1': '0'
  '2': '1'
  '3': '2'
  '4': '3'
  '5': '4'
  '6': '5'
  '7': '6'
  '8': '7'
  '9': '8'
}
type StrArrayMinusOne<T extends string[]> = T extends [...infer P extends string[], infer L] ?
  L extends keyof StrMinus ?
      [...P, StrMinus[L]] : // non-zero
      [...StrArrayMinusOne<P>, '9'] // zero
  : never
type StrArrayToStr<T extends string[]> = T extends [infer F extends string, ...infer R extends string[]] ?
  `${F}${StrArrayToStr<R>}` : ''
type RemoveZero<T extends string> = T extends `0${infer R}` ? R : T
type parseInt<T extends string> = T extends '0' ? 0 :
  RemoveZero<T> extends `${infer Digit extends number}` ? Digit : never
type MinusOne<T extends number> =
    T extends 0 ? -1 :
      parseInt<StrArrayToStr<
        StrArrayMinusOne< IntToStrArray<T> >
      >>
