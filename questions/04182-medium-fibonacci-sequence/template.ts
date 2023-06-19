type Fibonacci<T extends number, U extends any[] = [1, 1, 1], P1 extends any[] = [1], P2 extends any[] = [1]> =
  T extends 1 | 2 ? 1 :
    T extends U['length'] ? [...P1, ...P2]['length'] : Fibonacci<T, [...U, 1], [...P1, ...P2], P1>
