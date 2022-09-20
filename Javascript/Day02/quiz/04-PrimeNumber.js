
function showPrimeNumber(n){
  let start = 2 
  let count = 0
  let arrPrime = ''
  while(start < n) {
    if(isPrime(start)) {
      arrPrime += start + '\t'
      count++ 
    }
    
    if(count == 5) {
      arrPrime += '\n'
      count = 0
    }
    start++
  }
  return arrPrime
}

function isPrime(n){
  // for(let i = 2; i < n; i++) {
  //   if(n % i == 0) return false; 
  // }
  // return true;

  let i = 2
  while(i < n) {
    if (n % i == 0) return false;
    i++
  }
  return true
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */


