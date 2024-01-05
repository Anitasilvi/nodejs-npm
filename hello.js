import { sayHello, sum } from "anita-nodejs-npm-library";
import {max, min} from "anita-nodejs-npm-library/number.js";
console.info(sayHello("Anita"));

const numbers = [10, 10, 10, 10, 10];
console.info(sum(numbers));

console.info(min(10, 20));
console.info(max(10, 20));