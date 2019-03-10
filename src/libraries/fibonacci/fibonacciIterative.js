// iterative, time complexity: O(n), memory complexity: O(1)
export default function fibonacci(num) {
  if (num < 2) return num;

  var prevFirst = 0, prevSecond = 1, next = 1;

  for(var i = 2; i <= num; i++) {
    next = prevFirst + prevSecond;
    prevFirst = prevSecond;
    prevSecond = next;
  }

  return next;
}
