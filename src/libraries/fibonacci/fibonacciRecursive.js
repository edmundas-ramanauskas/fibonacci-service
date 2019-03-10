// recursive, time complexity: O(2^n)
// not usable due to exponential time complexity
export default function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
