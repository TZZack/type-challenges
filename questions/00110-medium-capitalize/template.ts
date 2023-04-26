type MyCapitalize<S extends string> = S extends `${infer firstChar}${infer rest}` ? `${Uppercase<firstChar>}${rest}` : S
// 下面是一种很愚蠢的方法，因为还不知道有Uppercase这个内置方法
// type MyCapitalize<S extends string> = S extends `a${infer A}` ?
//   `A${A}` : S extends `b${infer B}` ?
//   `B${B}` : S extends `c${infer C}` ?
//   `C${C}` : S extends `d${infer D}` ?
//   `D${D}` : S extends `e${infer E}` ?
//   `E${E}` : S extends `f${infer F}` ?
//   `F${F}` : S extends `g${infer G}` ?
//   `G${G}` : S extends `h${infer H}` ?
//   `H${H}` : S extends `i${infer I}` ?
//   `I${I}` : S extends `j${infer J}` ?
//   `J${J}` : S extends `k${infer K}` ?
//   `K${K}` : S extends `l${infer L}` ?
//   `L${L}` : S extends `m${infer M}` ?
//   `M${M}` : S extends `n${infer N}` ?
//   `N${N}` : S extends `o${infer O}` ?
//   `O${O}` : S extends `p${infer P}` ?
//   `P${P}` : S extends `q${infer Q}` ?
//   `Q${Q}` : S extends `r${infer R}` ?
//   `R${R}` : S extends `s${infer S}` ?
//   `S${S}` : S extends `t${infer T}` ?
//   `T${T}` : S extends `u${infer U}` ?
//   `U${U}` : S extends `v${infer V}` ?
//   `V${V}` : S extends `w${infer W}` ?
//   `W${W}` : S extends `x${infer X}` ?
//   `X${X}` : S extends `y${infer Y}` ?
//   `Y${Y}` : S extends `z${infer Z}` ?
//   `Z${Z}` : S
