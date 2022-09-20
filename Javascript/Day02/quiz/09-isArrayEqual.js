function isArraysEqual(arrayA, arrayB) {
  if (!Array.isArray(arrayA) && !Array.isArray(arrayB)) return 'inputan harus berupa array'
  if (arrayA.length !== arrayB.length) return false
  // let isEqual = true
  arrayA = arrayA.sort()
  arrayB = arrayB.sort()
  //arrayA.map((fruit,i) => fruit !== arrayB[i] ?  isEqual = false : isEqual = true) // 
  for (let i = 0; i < arrayA.length; i++) {
    //const element = arrayA[i];
    if (arrayA[i] !== arrayB[i]) return false
  }
  return true
}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
const fruitNamesD = ['mangga', 'apel' , 'alpukat','anggur'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
console.log(isArraysEqual(fruitNamesC, fruitNamesD)); // true
