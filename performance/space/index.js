function repeat(array) {
  let repeatedArray = array

  return repeatedArray
}

function convertString(array) {
  let result = array.map(element => element.toString())

  return result
}

console.log(convertString([1, 2, 3]))

function twoDimensions(value) {
  let x = new Array(value)

  for (let i = 0; i < value; i++) {
    x[i] = new Array(value).fill(0)
  }

  return x
}

console.log(twoDimensions(5))