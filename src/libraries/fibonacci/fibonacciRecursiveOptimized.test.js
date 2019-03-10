import { expect } from 'chai'
import fibonacci from './fibonacciRecursiveOptimized'

const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

describe('fibonacciRecursiveOptimized', () => {
  for(let i = 0; i < 10; i++) {
    it(`fibonacci(${i})`, () => {
      expect(fibonacci(i)).to.equal(sequence[i]);
    });
  }
});
