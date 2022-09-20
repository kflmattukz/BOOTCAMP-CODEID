
function isPalindrome(word){
  word = word.toLowerCase().split('') // ke lower case dan jadikan array
  let wordReverse = word.reverse() // bali array untuk perbandingan dari belakang

  if(word.join('') === wordReverse.join('')) return true // array di join dan di bandingan jika true return true

  return false
}

console.log(isPalindrome('kasur ini rUsak'));//true