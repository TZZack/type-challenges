interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ?
    [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>] : []

// [T] extends [TreeNode]是为了避免分布式条件类型，即distributive conditional type
// 分布式条件类型发生的条件：需要是联合类型、联合类型通过泛型参数传入、泛型参数在条件类型语句中需要是裸类型参数，即没有被[]包裹，看下面几个示例即可明白
// 示例1
type Extractz<T, U> = T extends U ? T : never
type _ExtractedKeys2 = Extractz<'a' | 'b' | 'c', 'a' | 'b'> // 'a'|'b'
type _ExtractedKeys3 = 'a' | 'b' | 'c' extends 'a' | 'b' ? 'a' | 'b' | 'c' : never // never

// 示例2
type Naked<T> = T extends boolean ? 'Y' : 'N'
type Wrapped<T> = [T] extends [boolean] ? 'Y' : 'N'
type Result1 = Naked<number | boolean> // "N" | "Y"
type Result2 = Wrapped<number | boolean> // "N"

// 官方解释：对于属于裸类型参数的检查类型，条件类型会在实例化时期自动分发到联合类型上。
