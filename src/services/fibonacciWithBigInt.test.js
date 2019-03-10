import { expect } from 'chai'
import fibonacci from './fibonacciWithBigInt'

const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].map(BigInt);

const validateFibonacci = n => expect(fibonacci(n)).to.eql(sequence.slice(0, n + 1))

describe('fibonacciWithBigInt service', () => {
  for(let i = 0; i < 10; i++) {
    it(`fibonacci(${i})`, () => {
      validateFibonacci(i);
    });
  }
});
