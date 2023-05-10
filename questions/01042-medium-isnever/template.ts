// 前面做的一道题有涉及相关知识点，没法直接用never extends never，需要包裹在数组里面
type IsNever<T> = [T] extends [never] ? true : false
// 网上看到的方法（21年提得），直接用type-challenge的equal方法，但是不生效
// import type { Equal } from '@type-challenges/utils'
// type isNever<T> = Equal<never, T>
