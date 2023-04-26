type AppendArgument<Fn, A> = Fn extends (...args: infer S) => infer P ? (...args: [...S, A]) => P : Fn
