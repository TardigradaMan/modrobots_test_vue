export const range = (start, end) => {
  return [...Array(end).keys()].map(p => p + start)
}

// const range = (start, end) => {
//   return [...Array(end).keys()].map(p => p + start)
// }

// console.log(range(980, 1040))
