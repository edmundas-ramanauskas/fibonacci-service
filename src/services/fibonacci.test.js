import { expect } from 'chai'
import fibonacci from './fibonacci'

const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

const validateFibonacci = n => expect(fibonacci(n)).to.eql(sequence.slice(0, n + 1))

describe('fibonacci service', () => {
  for(let i = 0; i < 10; i++) {
    it(`fibonacci(${i})`, () => {
      validateFibonacci(i);
    });
  }
});
