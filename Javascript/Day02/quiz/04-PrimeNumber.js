
function showPrimeNumber(n){
  let start = 0 
  let arrPrime = []
  while(start < n) {
    if(isPrime(start)) arrPrime.push(start)
    start++
  }
  return arrPrime
}

function isPrime(n){
  for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if(n % i === 0) return false; 
  }
  return n > 1;
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */


