import { count } from "../functions/functions.js";

console.time('count-timer');

count(5);

console.timeEnd('count-timer');

