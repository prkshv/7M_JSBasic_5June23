import { User } from "./export-import.js";
import Hello3 from "./function.js";
import { Hello1, Hello2 } from "./function.js";
import Demo from "./default.js";

let a = new User("test");
console.log(a);

Hello1("something");

Hello2("user2");

let c = new Demo("default import");
console.log(c);

Hello3();
