function fib(n) {
  if(n <= 1) return n;
  let first = 0;
  let second = 1;
  for(let i=0;i<n-1;i++) {
    let sum = first + second;
    first = second;
    second = sum;
  }
  return second;
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))