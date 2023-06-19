//export with array
export let months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

//export with const
export const MODULE_BECAME_STANDARD_YEAR = 2023;

//export with class
export class User {
  constructor(name) {
    this.name = name;
  }
}

//export with function
export function Hello(user) {
  alert(`Hello, ${user}`);
}
