/**
 * Time complexity --> O()
 *
 * Spacial complexity --> O()
 */

function linearSearch(array, key) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === key) {
      return index;
    }
  }

  return -1;
}
