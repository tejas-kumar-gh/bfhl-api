
function fibonacci(n) {
  if (n <= 0) return [];

  let res = [0];
  if (n === 1) return res;

  res.push(1);

  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res;
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}


function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}


function hcf(arr) {
  return arr.reduce((a, b) => gcd(a, b));
}


function lcm(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

module.exports = { fibonacci, isPrime, hcf, lcm };
