import { identity, memoizeWith } from 'ramda';
import fibonacci from '../libraries/fibonacci';

const memoizedFibonacci = memoizeWith(identity, fibonacci);

export default num => {
  if (num < 0) throw new Error('Invalid input');
  const result = [];
  for (let i = 0; i <= num; i++) {
    result.push(memoizedFibonacci(i));
  }
  return result;
}
