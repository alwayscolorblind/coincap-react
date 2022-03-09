export const roundNumberString = (str: string, to = 2) => {
  const num = +str
  const tempTo = 10 ** to

  return Math.round(num * tempTo) / tempTo
}
