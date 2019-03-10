// iterative, time complexity: O(n), memory complexity: O(n)
export default num => {
  const sequence = [0, 1];
  for (let i = 2; i < num + 1; i++){
    sequence.push(sequence[i - 2] + sequence[i -1])
  }
  return sequence[n]
}
