console.log("Vieo 32");

const sum = (a, b, c) => {
  console.log("Run before");
  if(typeof a !== "number") {
    return;
  }
  console.log("Run after");
  return a + b + c;
}

console.log(sum("a", 2, 3));
