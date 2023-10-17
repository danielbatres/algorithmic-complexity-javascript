/**
 * Time complexity --> O( n + 3 ) --> O(n)
 *
 * Spacial complexity --> O()
 * 
 * Ot() = time
 * Os() = space
 */

function linearSearch(array, key) {
  for (let index = 0; index < array.length; index++) { // Ot(n)
    if (array[index] === key) { // Ot(1)
      return index; // Ot(1)
    }
  }

  return -1; // Ot(1)
}
