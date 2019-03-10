'strict mode';

function fibonacciRecursive(n, a, b){
  if (n === 0) {
    return b;
  }
  return fibonacciRecursive(n-1, a + b, a);
};

// recursive with tail call optimization
export default num => {
  return fibonacciRecursive(num, 1, 0);
}
