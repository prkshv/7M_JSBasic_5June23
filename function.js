function Hello1(user) {
  alert(`Hello, ${user}`);
}

function Hello2(user) {
  alert(`Bye, ${user}`);
}

export default function Hello3() {
  console.log("function before called");
}

export { Hello1, Hello2 };

//when using default first letter needs to be capital
// when importing default no {} used
