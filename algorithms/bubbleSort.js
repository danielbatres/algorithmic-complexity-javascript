/**
 * Time complexity --> O( n * n + 6 ) --> O(n^2)
 * 
 * Space complexity --> O()
 * 
 * Ot() = time
 * Os() = space
 */

function bubbleSort(array) {
  let length = array.length; // Ot(1)

  for (let i = 0; i < length; i++) { // Ot(n)
    for (let j = 0; j < length; j++) { // Ot(n)
      if (array[j] > array[j + 1]) { // Ot(1)
        let temporal = array[j]; // Ot(1)

        array[j] = array[j + 1]; // Ot(1)
        array[j + 1] = temporal; // Ot(1)
      }
    }
  }

  return array; // Ot(1)
}