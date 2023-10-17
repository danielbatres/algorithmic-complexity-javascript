/**
 * Time complexity --> O( n * n + c ) --> O(n^2)
 *
 * Space complexity --> O( n + 5 ) --> O(n)
 * auxiliary space = space complexity - input data --> O(1)
 *
 * Ot() = time
 * Os() = space
 */

function selectionSort(array) { // Os(n)
  let length = array.length; // Ot(1) Os(1)

  for (let i = 0; i < length; i++) { // Ot(n) Os(1)
    let minimum = i; // Ot(1) Os(1)

    for (let j = 0; j < array.length; j++) { // Ot(n) Os(1)
      if (array[j] < array[minimum]) { // Ot(1)
        minimum = j; // Ot(1) 
      }
    }

    if (minimum !== i) { // Ot(1)
      let temporal = array[i]; // Ot(1) Os(1)

      array[i] = array[minimum]; // Ot(1)
      array[minimum] = temporal; // Ot(1)
    }
  }

  return array; // Ot(1)
}