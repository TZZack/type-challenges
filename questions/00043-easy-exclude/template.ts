/** chatgpt的解释
 * 在这个示例中，我们使用了条件类型中的类型推断机制来实现对boolean类型的排除。
 * 具体来说，我们定义了一个类型MyExclude<T, U>，它接受两个类型参数T和U。在类型定义中，我们使用了一个条件类型T extends U ? never : T，它表示如果T是U的子类型，则返回never类型，否则返回T类型本身。
 * 当我们使用MyExclude<string | number | boolean, boolean>时，T被推断为string | number | boolean，U被推断为boolean。因此，对于每个类型T，条件类型T extends U ? never : T将检查T是否是boolean的子类型。对于string和number类型，条件类型的结果是string和number类型本身，因为它们不是boolean的子类型。但是，对于boolean类型，条件类型的结果是never类型，因为它是boolean的子类型。因此，MyExclude<string | number | boolean, boolean>的结果是string | number类型，boolean类型被排除了
 */
// 深入理解：传入的联合类型，到了泛型T那边，会逐个拿来判断
type MyExclude<T, U extends T> = T extends U ? never : T
