if (!BigInt.toJSON) {
  BigInt.prototype.toJSON = function() { return this.toString(); };
}

const sequence = [0, 1].map(BigInt);

export default n => {
  if (n < 0) throw new Error('Invalid input');

  const num = n + 1;

  if (sequence.length >= num) {
    return sequence.slice(0, num);
  }

  for (let i = sequence.length; i < num; i++){
    sequence.push(BigInt(sequence[i - 2] + sequence[i -1]))
  }

  return sequence;
}
