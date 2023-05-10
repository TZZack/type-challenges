// Omit<T, never>这里的作用应该是把交叉类型转为一个整体的object类型
type RequiredByKeys<T, K extends keyof T = keyof T> = Omit<T & Required<Pick<T, K>>, never>

