// http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibFormula.html
// time complexity: O(1), memory complexity: O(1)
// while it's constant time complexity, but due to complicated math
// performance isn't that great
export default num => {
  var sqRootOf5 = Math.sqrt(5);

  var Phi = (1 + sqRootOf5) / 2;
  var phi = (1 - sqRootOf5) / 2

  return Math.round((Math.pow(Phi, num) - Math.pow(phi, num)) / sqRootOf5);
}
