// 重点是将对象转换为联合类型，方式是T[keyof T]；如果是数组转联合类型，则是['1', '2']['number'] // '1'| '2'
type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined> // 针对Partial后有undefined的联合类型
type ObjectEntries<T> = {
  [K in keyof T]-?: [K, RemoveUndefined<T[K]>]
}[keyof T]
