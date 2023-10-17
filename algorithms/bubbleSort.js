/**
 * Time complexity --> O( n * n + 6 ) --> O(n^2)
 * 
 * Space complexity --> O( n + 4 ) --> O(n)
 * auxiliary space = space complexity - input data --> O(1)
 * 
 * Ot() = time
 * Os() = space
 */

function bubbleSort(array) { // Os(n)
  let length = array.length; // Ot(1) Os(1)

  for (let i = 0; i < length; i++) { // Ot(n) Os(1)
    for (let j = 0; j < length; j++) { // Ot(n) Os(1)
      if (array[j] > array[j + 1]) { // Ot(1) 
        let temporal = array[j]; // Ot(1) Os(1)

        array[j] = array[j + 1]; // Ot(1)
        array[j + 1] = temporal; // Ot(1)
      }
    }
  }

  return array; // Ot(1)
}