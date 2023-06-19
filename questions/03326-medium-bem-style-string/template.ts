type AddE<B extends string, E extends string[]> = E extends [] ? B : `${B}__${E[number]}`
type AddM<B extends string, M extends string[]> = M extends [] ? B : `${B}--${M[number]}`
type BEM<B extends string, E extends string[], M extends string[]> = AddM<AddE<B, E>, M>
