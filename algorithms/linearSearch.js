/**
 * Time complexity --> O( n + 3 ) --> O(n)
 *
 * Space complexity --> O( n + 1 ) --> O(n)
 * auxiliary space = space complexity - input data --> O(1)
 * 
 * Ot() = time
 * Os() = space
 */

function linearSearch(array, key) { // Os(n)
  for (let index = 0; index < array.length; index++) { // Ot(n) Os(1)
    if (array[index] === key) { // Ot(1)
      return index; // Ot(1)
    }
  }

  return -1; // Ot(1)
}
