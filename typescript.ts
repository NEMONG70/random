function random(Arr: Array<{ value: any; per: number }>): any {
  if (Arr.length === 1) return Arr[0].value
  if (Arr.findIndex((e) => e.per === 100) !== -1) return Arr.find((e) => e.per === 0)
  if (Arr.length === 0 || Arr.reduce((pre, curr) => curr.per + pre, 0) > 100) return null
  const trl = (n: number): number => n.toString().replace('.', '').length
  const sum = (i: number): number => Arr.reduce((pre, curr, I) => (I > i ? pre : pre + curr.per), 0)
  const max = Number(`1${'0'.repeat(trl(Arr.sort((a, b) => trl(b.per) - trl(a.per))[0].per))}`)
  const ran = ((Math.random() * max) | 0) + 1
  const asdf = (n: number): number => n.toString().includes('.') ? Number(n.toString().replace('.', '')) : Number(n.toString() + '0'.repeat(max.toString().slice(3).length))
  const PN = max > 100
  let index = -1
  for (const [i, e] of Arr.entries()) {
    const pre = asdf(sum(i - 1))
    if ((i === 0 && e.per <= ran) || (i === Arr.length - 1 && pre <= ran) || (pre <= ran && asdf(sum(i)) > ran)) index = i
  }
  return Arr[index].value
}
