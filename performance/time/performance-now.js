import { count } from "../functions/functions.js";

let startTime = performance.now();

count(5);

let endTime = performance.now();

let duration = endTime - startTime;

console.log(`The count algorithm has lasted ${duration}`);